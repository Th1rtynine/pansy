import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// posts = 文章的"数据库表"
const posts = defineCollection({
	// 从 src/content/posts 目录加载所有 .md/.mdx 文件
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
	// schema = frontmatter 的格式约定：缺字段/类型写错，Astro 直接报错给你看
	schema: z.object({
		title: z.string(),
		published: z.date(),
		description: z.string().default(""),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
	}),
});

export const collections = { posts };