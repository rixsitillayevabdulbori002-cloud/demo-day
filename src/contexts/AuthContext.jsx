import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const savedUser = sessionStorage.getItem('currentUser');
    const savedUsers = sessionStorage.getItem('users');
    if (savedUser) setUser(JSON.parse(savedUser));
    if (savedUsers) setUsers(JSON.parse(savedUsers));
  }, []);

  const register = (name, email, password) => {
    if (users.find(u => u.email === email)) {
      return { success: false, message: 'Email уже зарегистрирован' };
    }
    const newUser = { id: Date.now(), name, email, password };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    sessionStorage.setItem('users', JSON.stringify(updatedUsers));
    return { success: true, message: 'Регистрация успешна' };
  };

  const login = (email, password) => {
    const foundUser = users.find(u => u.email === email && u.password === password);
    if (foundUser) {
      const userWithoutPassword = { id: foundUser.id, name: foundUser.name, email: foundUser.email };
      setUser(userWithoutPassword);
      sessionStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
      return { success: true };
    }
    return { success: false, message: 'Неверный email или пароль' };
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem('currentUser');
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};