import { PUBLIC_DONATE_URL } from 'astro:env/client';

export type DonationPackage = {
  id: string;
  name: string;
  amount: number;
  perks: string[];
};

export const donationPackages: DonationPackage[] = [
  {
    id: 'supporter',
    name: 'Supporter',
    amount: 5,
    perks: ['Project support badge', 'Discord supporter role', 'Website thank-you listing'],
  },
  {
    id: 'champion',
    name: 'Champion',
    amount: 15,
    perks: ['All Supporter perks', 'Priority launcher mirror', 'Monthly cosmetic vote'],
  },
  {
    id: 'legend',
    name: 'Legend',
    amount: 30,
    perks: ['All Champion perks', 'Founders board mention', 'Early patch preview signup'],
  },
];

export async function createCheckoutUrl(packageId: string, requestUrl: string) {
  if (PUBLIC_DONATE_URL.trim()) {
    return PUBLIC_DONATE_URL;
  }

  const packageName = donationPackages.find((item) => item.id === packageId)?.name ?? 'Supporter';
  const url = new URL('/donate', requestUrl);
  url.searchParams.set('success', '1');
  url.searchParams.set('package', packageName);
  return url.toString();
}
