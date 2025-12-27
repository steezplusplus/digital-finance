type AvailableSavingsType = {
  amount: number;
  currency: string;
  yearlyEquivalent: number;
  description: string;
  actionLabel: string;
  actionUrl: string;
};

type ReshapingSavingsType = {
  amount: number;
  currency: string;
  yearlyEquivalent: number;
  description: string;
  tooltip: string;
};

type AnomalySeverityType = {
  high: number;
  medium: number;
  low: number;
};

type AnomaliesType = {
  count: number;
  estimatedCostImpact: number;
  currency: string;
  description: string;
  severity: AnomalySeverityType;
  tooltip: string;
};

export type SavingsType = {
  available: AvailableSavingsType;
  reshaping: ReshapingSavingsType;
  anomalies: AnomaliesType;
};

export type UtilizationType = {
  organizationName: string;
  organizationColor: string;
  monthToDateSavings: number;
  currency: string;
  percentage: number;
  target: number;
  status: 'underutilized' | 'optimal' | 'overutilized';
  tooltip: string;
};

export type ReservationType = {
  id: string;
  type: string;
  category: string;
  instance: string;
  endDate: string;
  startDate: string;
  costPerHour: number;
  mtdSavings: number;
  currency: string;
  managedByNorth: boolean;
  status: 'active' | 'inactive' | 'expired';
  utilizationPercent: number;
};

// Spend Types
export interface ProjectedSpendType {
  amount: number;
  currency: string;
  percentageChange: number;
  trend: 'up' | 'down';
  comparedTo: string;
}

export interface CurrentSpendType {
  amount: number;
  currency: string;
  period: string;
  periodLabel: string;
}

export interface TimeSeriesSpendType {
  date: string;
  amount: number;
  projected: number;
}


export interface SpendType {
  projected: ProjectedSpendType;
  current: CurrentSpendType;
  timeSeries: TimeSeriesSpendType[];
}

// TODO: Finish this type
export type CloudCostDataType = {
  account: Record<string, unknown>;
  meta: Record<string, unknown>;
  period: Record<string, unknown>;
  reservations: ReservationType[];
  spend: SpendType;
  savings: SavingsType;
  tableConfig: Record<string, unknown>;
  utilization: UtilizationType;
};
