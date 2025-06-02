import { MeterType, WarehouseInfo, User } from './types';

export const APP_TITLE = "Controle de Estoque de Medidores";

export const WAREHOUSES: WarehouseInfo[] = [
  { id: 'wh3', name: 'Angra dos Reis' },
  { id: 'wh4', name: 'Resende' },
  { id: 'wh5', name: 'Magé' },
  { id: 'wh6', name: 'Petrópolis' },
  { id: 'wh7', name: 'Teresópolis' },
  { id: 'wh8', name: 'Maricá' },
  { id: 'wh9', name: 'São Gonçalo' },
];

export const INITIAL_METER_TYPES: MeterType[] = [
  { id: '510546', codE4E: '510546', codSAP: '6781666', tipo: 'Tradicional', descricao: 'MED ELETR, 1F,ACT15,100A,120V,2H,1E,60HZ', corrente: '100A', fase: 'Monofásico' },
  { id: '510570', codE4E: '510570', codSAP: '6794396', tipo: 'Tradicional', descricao: 'MEDIDOR ELETR BIF,MED DIR,15(120)A,120V', corrente: '120A', fase: 'Bifásico' },
  { id: '510571', codE4E: '510571', codSAP: '6794397', tipo: 'Tradicional', descricao: 'MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V', corrente: '120A', fase: 'Trifásico' },
  { id: '510423', codE4E: '510423', codSAP: '4614682', tipo: 'Tradicional', descricao: 'MEDIDOR ELECTRONI 3F ACT/REAC 30(200)A', corrente: '200A', fase: 'Trifásico' },
  { id: '510452', codE4E: '510452', codSAP: '4659580', tipo: 'Tradicional', descricao: 'MEDIDOR ELECTRONI 3F 30(200)A S/ DISPLAY', corrente: '200A', fase: 'Trifásico' },
  { id: '510455', codE4E: '510455', codSAP: '4664448', tipo: 'GD', descricao: 'MED,ELET,GD,MONO,15-100A,120V,2H,1E,60HZ', corrente: '100A', fase: 'Monofásico' },
  { id: '510771', codE4E: '510771', codSAP: '6815803', tipo: 'GD', descricao: 'MED,GD,BIF,15-120A,120V,2E,4F, E-EM-004', corrente: '120A', fase: 'Bifásico' },
  { id: '510456', codE4E: '510456', codSAP: '4664449', tipo: 'GD', descricao: 'MED,ELET,GD,TRI,15-120A,120V,3E,4F, 60HZ', corrente: '120A', fase: 'Trifásico' },
  { id: '510780', codE4E: '510780', codSAP: 'T510072', tipo: 'GD', descricao: 'MED ELET GERDIST,TRI 30-200A,120V,3E,4F', corrente: '200A', fase: 'GD 200' },
  { id: '510784', codE4E: '510784', codSAP: 'T510087', tipo: 'TB', descricao: 'MED,ELET BRANC 15-100A,120V,1E,2F E-EM02', corrente: '100A', fase: 'Monofásico' },
  { id: '510783', codE4E: '510783', codSAP: 'T510086', tipo: 'TB', descricao: 'MED,ELET BRANC,15-120A,120V,2E,3F E-EM-0', corrente: '120A', fase: 'Bifásico' },
  { id: '510789', codE4E: '510789', codSAP: 'T510101', tipo: 'TB', descricao: 'MED,ELET BRANC,15-120A,120V,3E,4F E-EM04', corrente: '120A', fase: 'Trifásico' },
  { id: '510133', codE4E: '510133', codSAP: 'REN871', tipo: 'REN871', descricao: 'MED ELET AMOSTRAL 15-100 MONO', corrente: '100A', fase: 'Monofásico' },
  { id: '510136', codE4E: '510136', codSAP: 'REN872', tipo: 'REN872', descricao: 'MED ELET AMOSTRAL 15-120 BIFASICO', corrente: '120A', fase: 'Bifásico' },
  { id: '510137', codE4E: '510137', codSAP: 'REN873', tipo: 'REN873', descricao: 'MED ELET AMOSTRAL 15-120A 120/120 3E4F', corrente: '120A', fase: 'Trifásico' },
  { id: '99999', codE4E: '99999', codSAP: '1111111 MI', tipo: 'MI', descricao: 'MED ELETRON MULTIF 4F LCD 4F 2-3E', corrente: '100A', fase: 'Trifásico' },
];

export const INITIAL_USERS: User[] = [
  {
    id: 'admin-001',
    email: 'admin@example.com',
    name: 'Admin Geral',
    password: 'adminpass', // NOT FOR PRODUCTION
    role: 'admin',
    assignedWarehouseIds: WAREHOUSES.map(wh => wh.id), // Admin has access to all
  },
  {
    id: 'user-001',
    email: 'user@example.com',
    name: 'Almoxarife Angra',
    password: 'userpass', // NOT FOR PRODUCTION
    role: 'user',
    assignedWarehouseIds: ['wh3'], // Angra dos Reis
  },
  {
    id: 'user-002',
    email: 'user.resende@example.com',
    name: 'Almoxarife Resende',
    password: 'userpass2', // NOT FOR PRODUCTION
    role: 'user',
    assignedWarehouseIds: ['wh4'], // Resende
  }
];
