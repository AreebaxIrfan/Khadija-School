import { createClient } from 'next-sanity';

interface SanityClientConfig {
 projectId: string;
 dataset: string;
 apiVersion: string;
 useCdn: boolean;
 token?: string;
}

const config: SanityClientConfig = {
 projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
 dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
 apiVersion: '2025-06-09',
 useCdn: false, // Disable CDN for mutations
 token: process.env.SANITY_WRITE_TOKEN,
};

export const sanityClient = createClient(config);