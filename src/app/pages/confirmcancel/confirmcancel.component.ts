import { Component, OnInit } from '@angular/core';

interface CancellationPolicy {
  charge: number;
  chargeType: number;
  currency: string;
  fromDate: string;
  toDate: string;
}

interface IndividualPolicyResponse {
  lastCancellationDate: string;
  cancellationPolicies: CancellationPolicy[];
}

@Component({
  selector: 'app-confirmcancel',
  templateUrl: './confirmcancel.component.html',
  styleUrls: ['./confirmcancel.component.scss']
})
export class ConfirmcancelComponent implements OnInit {
  combinedPolicy: IndividualPolicyResponse | null = null;

  flightPolicy: IndividualPolicyResponse = {
    lastCancellationDate: '2024-07-15',
    cancellationPolicies: [
      { charge: 25, chargeType: 2, currency: 'INR', fromDate: '2024-07-16', toDate: '2024-07-19' },
      { charge: 75, chargeType: 2, currency: 'INR', fromDate: '2024-07-20', toDate: '2024-07-23' },
      { charge: 100, chargeType: 2, currency: 'INR', fromDate: '2024-07-24', toDate: '2024-07-28' }
    ]
  };

  hotelPolicy: IndividualPolicyResponse = {
    lastCancellationDate: '2024-07-10',
    cancellationPolicies: [
      { charge: 25, chargeType: 2, currency: 'INR', fromDate: '2024-07-11', toDate: '2024-07-15' },
      { charge: 50, chargeType: 2, currency: 'INR', fromDate: '2024-07-16', toDate: '2024-07-18' },
      { charge: 100, chargeType: 2, currency: 'INR', fromDate: '2024-07-19', toDate: '2024-07-23' }
    ]
  };

  sightseeingPolicy: IndividualPolicyResponse = {
    lastCancellationDate: '2024-07-18',
    cancellationPolicies: [
      { charge: 50, chargeType: 2, currency: 'INR', fromDate: '2024-07-19', toDate: '2024-07-21' },
      { charge: 100, chargeType: 2, currency: 'INR', fromDate: '2024-07-22', toDate: '2024-07-25' }
    ]
  };

  packageCost: number = 10000;
  cancellationDate: string = '2024-07-20';
  refundAmount: number = 0;
  cancellationChargePercentage: number = 0; // Changed variable name to store percentage

  constructor() { }

  ngOnInit(): void {
    this.combinedPolicy = this.getCombinedPolicy(
      this.flightPolicy,
      this.hotelPolicy,
      this.sightseeingPolicy
    );

    if (this.combinedPolicy) {
      const result = this.calculateCancellationCharge(
        this.packageCost,
        this.cancellationDate,
        this.combinedPolicy.cancellationPolicies
      );
      this.cancellationChargePercentage = result.cancellationChargePercentage; // Use percentage here
      this.refundAmount = result.refundAmount;
    }

    console.log('Combined Policy:', this.combinedPolicy);
    console.log('Cancellation Charge Percentage:', this.cancellationChargePercentage);
    console.log('Refund Amount:', this.refundAmount);
  }

  getCombinedPolicy(
    flightPolicy: IndividualPolicyResponse,
    hotelPolicy: IndividualPolicyResponse,
    sightseeingPolicy: IndividualPolicyResponse
  ): IndividualPolicyResponse {
    const lastCancellationDate = this.formatDate(this.getEarliestDate([
      flightPolicy.lastCancellationDate,
      hotelPolicy.lastCancellationDate,
      sightseeingPolicy.lastCancellationDate
    ]));

    const allPolicies = [...flightPolicy.cancellationPolicies, ...hotelPolicy.cancellationPolicies, ...sightseeingPolicy.cancellationPolicies];
    const mergedPolicies = this.mergePolicies(allPolicies);

    const combinedPolicies: CancellationPolicy[] = mergedPolicies.map(policy => ({
      charge: policy.charge,
      chargeType: policy.chargeType,
      currency: policy.currency,
      fromDate: policy.fromDate,
      toDate: policy.toDate,
    }));

    return {
      lastCancellationDate,
      cancellationPolicies: combinedPolicies,
    };
  }

  private mergePolicies(policies: CancellationPolicy[]): CancellationPolicy[] {
    const allPolicies = [...policies];
    allPolicies.sort((a, b) => new Date(a.fromDate).getTime() - new Date(b.fromDate).getTime());

    const mergedPolicies: CancellationPolicy[] = [];
    let currentPolicy: CancellationPolicy | null = null;

    allPolicies.forEach(policy => {
      if (currentPolicy === null) {
        currentPolicy = { ...policy };
      } else if (new Date(policy.fromDate).getTime() <= new Date(currentPolicy.toDate).getTime() + 86400000) {
        if (new Date(policy.toDate).getTime() > new Date(currentPolicy.toDate).getTime()) {
          if (policy.charge > currentPolicy.charge) {
            currentPolicy.toDate = new Date(new Date(policy.fromDate).getTime() - 86400000).toISOString().split('T')[0];
            mergedPolicies.push(currentPolicy);
            currentPolicy = { ...policy };
          } else {
            currentPolicy.toDate = policy.toDate;
          }
        } else {
          if (policy.charge > currentPolicy.charge) {
            currentPolicy.toDate = new Date(new Date(policy.fromDate).getTime() - 86400000).toISOString().split('T')[0];
            mergedPolicies.push(currentPolicy);
            currentPolicy = { ...policy };
          }
        }
      } else {
        mergedPolicies.push(currentPolicy);
        currentPolicy = { ...policy };
      }
    });

    if (currentPolicy !== null) {
      mergedPolicies.push(currentPolicy);
    }
    console.log('Merged Policies:', mergedPolicies);
    return mergedPolicies;
  }

  private getEarliestDate(dates: string[]): string {
    return new Date(Math.min(...dates.map(date => new Date(date).getTime()))).toISOString().split('T')[0];
  }

  private formatDate(date: string): string {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${year}-${month}-${day}`;
  }

  private calculateCancellationCharge(
    packageCost: number,
    cancellationDate: string,
    mergedPolicies: CancellationPolicy[]
  ): { cancellationChargePercentage: number; refundAmount: number } {
    let cancellationChargePercentage = 0;
    let refundAmount = packageCost;
  
    const cancellationDateObj = new Date(cancellationDate);
    if (isNaN(cancellationDateObj.getTime())) {
      throw new Error("Invalid cancellation date");
    }
  
    for (const policy of mergedPolicies) {
      const fromDate = new Date(policy.fromDate);
      const toDate = new Date(policy.toDate);
  
      if (isNaN(fromDate.getTime()) || isNaN(toDate.getTime())) {
        throw new Error("Invalid policy date range");
      }
  
      if (cancellationDateObj >= fromDate && cancellationDateObj <= toDate) {
        cancellationChargePercentage = policy.charge;
        refundAmount = packageCost - (packageCost * cancellationChargePercentage) / 100;
        break;
      }
    }
  
    console.log('Cancellation Charge Percentage:', cancellationChargePercentage);
    console.log('Refund Amount:', refundAmount);
  
    return { cancellationChargePercentage, refundAmount };
  }
}
