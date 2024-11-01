/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "data-table" {
  export interface Transaction {
    transactionId: number;
    dateTime: string;
    customerName: string;
    phoneNumber: string;
    paymentMethod: string;
    serviceType: string;
    serviceName: string;
    amount: number;
    status: string;
    actions?: any;
  }

  export interface Column<T> {
    key: keyof T | "actions";
    label: string;
    render?: (row: T) => React.ReactNode;
  }

  export interface DataTableProps<T> {
    columns: Column<T>[];
    data: T[];
    pagination?: Pagination;
    onSort: (key: keyof T, direction: "asc" | "desc") => void;
  }

  export interface TableHeaderProps<T> {
    columns: Column<T>[];
    onSort: (key: keyof T, direction: "asc" | "desc") => void;
  }

  export interface Pagination {
    rowsPerPage: number;
  }

  export interface SortConfig {
    key: string | null;
    direction: "asc" | "desc";
  }
}
