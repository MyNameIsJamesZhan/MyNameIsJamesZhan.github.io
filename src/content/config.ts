import { z, defineCollection } from "astro:content";
const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
    tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
        message: 'tags must be unique',
    }).optional(),
});

const storeSchema = z.object({
    title: z.string(),
    description: z.string(),
    custom_link_label: z.string(),
    custom_link: z.string().optional(),
    updatedDate: z.coerce.date(),
    pricing: z.string().optional(),
    oldPricing: z.string().optional(),
    badge: z.string().optional(),
    checkoutUrl: z.string().optional(),
    heroImage: z.string().optional(),
});

const reviewTagsField = z.array(z.string()).refine(items => new Set(items).size === items.length, {
    message: 'tags must be unique',
}).optional();

const podcastReviewSchema = z.object({
    title: z.string(),
    podcast: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    rating: z.number().min(1).max(5),
    heroImage: z.string().optional(),
    tags: reviewTagsField,
    episode: z.string().optional(),
    host: z.string().optional(),
    duration: z.string().optional(),
    listenUrl: z.string().optional(),
});

const paperReviewSchema = z.object({
    title: z.string(),
    authors: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    rating: z.number().min(1).max(5),
    heroImage: z.string().optional(),
    tags: reviewTagsField,
    venue: z.string().optional(),
    paperYear: z.string().optional(),
    paperUrl: z.string().optional(),
});

const productReviewSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    rating: z.number().min(1).max(5),
    heroImage: z.string().optional(),
    tags: reviewTagsField,
    brand: z.string().optional(),
    price: z.string().optional(),
    verdict: z.string().optional(),
    purchaseUrl: z.string().optional(),
});

export type BlogSchema = z.infer<typeof blogSchema>;
export type StoreSchema = z.infer<typeof storeSchema>;
export type PodcastReviewSchema = z.infer<typeof podcastReviewSchema>;
export type PaperReviewSchema = z.infer<typeof paperReviewSchema>;
export type ProductReviewSchema = z.infer<typeof productReviewSchema>;

const blogCollection = defineCollection({ schema: blogSchema });
const storeCollection = defineCollection({ schema: storeSchema });
const podcastReviewCollection = defineCollection({ schema: podcastReviewSchema });
const paperReviewCollection = defineCollection({ schema: paperReviewSchema });
const productReviewCollection = defineCollection({ schema: productReviewSchema });

export const collections = {
    'blog': blogCollection,
    'store': storeCollection,
    'podcast-reviews': podcastReviewCollection,
    'paper-reviews': paperReviewCollection,
    'product-reviews': productReviewCollection,
}