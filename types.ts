export interface MeterType {
  id: string; // Using codE4E as ID
  codE4E: string;
  codSAP: string;
  tipo: string;
  descricao: string;
  corrente: string;
  fase: string;
  saldoEmergencia?: string;
  saldoNL?: string;
  lteLigTemp?: string;
  reaproveitados?: string;
}

export interface WarehouseInfo {
  id: string;
  name: string;
}

export enum TransactionType {
  IN = 'Entrada',
  OUT = 'Saída',
  ADJUSTMENT = 'Ajuste'
}

export interface InventoryTransaction {
  id: string; // uuid
  timestamp: string; // ISO string
  warehouseId: string;
  meterTypeId: string;
  transactionType: TransactionType;
  quantity: number;
  notes?: string;
  userName?: string; // Optional: to track who made the entry // Will be replaced by logged-in user
}

export interface CurrentStock {
  meterTypeId: string;
  meterTypeDesc: string;
  warehouseId: string;
  warehouseName: string;
  quantity: number;
}

export interface ChartData {
  name: string;
  value: number;
  [key: string]: any; // For multi-bar charts etc.
}

export type UserRole = 'admin' | 'user';

export interface User {
  id: string;
  email: string;
  name: string;
  password?: string; // Plaintext for now, NOT FOR PRODUCTION
  role: UserRole;
  assignedWarehouseIds: string[]; // List of warehouse IDs user has access to
}
