import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { InventoryProvider } from './contexts/InventoryContext';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import DataInputPage from './pages/DataInputPage';
import CurrentStockPage from './pages/CurrentStockPage';
import InventoryLogPage from './pages/InventoryLogPage';
import MeterTypesPage from './pages/MeterTypesPage';
import UserManagementPage from './pages/UserManagementPage'; 

const App: React.FC = () => {
  return (
    <AuthProvider>
      <InventoryProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route element={<ProtectedRoute />}> {/* Routes requiring auth and layout */}
            <Route element={<Layout />}> {/* Layout wraps these pages */}
              <Route path="/" element={<DashboardPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/data-input" element={<DataInputPage />} />
              <Route path="/current-stock" element={<CurrentStockPage />} />
              <Route path="/inventory-log" element={<InventoryLogPage />} />
              <Route path="/meter-types" element={<MeterTypesPage />} />
              {/* 
              User Management Route (Admin only logic is handled by sidebar link visibility and page content, 
              but ideally a separate AdminRoute component or check within UserManagementPage for role would be more robust)
              */}
              <Route path="/user-management" element={<UserManagementPage />} /> 
            </Route>
          </Route>
        </Routes>
      </InventoryProvider>
    </AuthProvider>
  );
};

export default App;