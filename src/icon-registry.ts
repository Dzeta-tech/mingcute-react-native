// Re-export from generated registry
export * from './generated/icon-registry';

// Type definitions
export interface IconData {
  width: number;
  height: number;
  paths: Array<{
    d: string;
    fill?: string;
  }>;
}

