import type { TemplatePage } from "@/components/build/types";
import { TeddyBoyTemplateRoot } from "../root";
import HeroCarousel from "./_components/HeroCarousel";
import FeaturedCategories from "./_components/CategoriesSection";
import { BannerComponent } from "./_components/banner";
import ProductListing from "./_components/product-listing";

export const TeddyBoyLandingPageTemplate: TemplatePage = {
	config: {
		root: TeddyBoyTemplateRoot,
		components: {
			HeroSection: {
				fields: {
					slides: {
						type: "array",
						arrayFields: {
							content: { type: "text" },
						},
					},
				},
				defaultProps: {
					slides: [
						{
							content:
								"https://capconscom.s3.ap-south-1.amazonaws.com/templates/template-teddyboy/tbanner1.webp",
						},
						{
							content:
								"https://capconscom.s3.ap-south-1.amazonaws.com/templates/template-teddyboy/tbanner2.webp",
						},
						{
							content:
								"https://capconscom.s3.ap-south-1.amazonaws.com/templates/template-teddyboy/tbanner3.webp",
						},
					],
				},
				render: ({ slides }) => {
					return <HeroCarousel slides={slides} />;
				},
			},
			FeaturedSection: {
				fields: {
					categories: {
						type: "array",
						arrayFields: {
							name: { type: "text" },
							image: { type: "text" },
							href: { type: "text" },
						},
					},
				},
				defaultProps: {
					categories: [
						{
							id: 1,
							name: "Category 1",
							image:
								"https://assets.capcons.social/templates/template-teddyboy/image1.webp",
							href: "/collections/jeans-unisex",
						},
						{
							id: 2,
							name: "Category 2",
							image:
								"https://assets.capcons.social/templates/template-teddyboy/image2.webp",
							href: "/collections/clothing-tops-unisex",
						},
						{
							id: 3,
							name: "Category 3",
							image:
								"https://assets.capcons.social/templates/template-teddyboy/image3.webp",
							href: "/collections/cargo-pants-unisex",
						},
						{
							id: 4,
							name: "Category 4",
							image:
								"https://assets.capcons.social/templates/template-teddyboy/image4.webp",
							href: "/collections/pants-unisex",
						},
						{
							id: 5,
							name: "Category 5",
							image:
								"https://assets.capcons.social/templates/template-teddyboy/image5.webp",
							href: "/collections/pants-unisex",
						},
						{
							id: 6,
							name: "Category 6",
							image:
								"https://assets.capcons.social/templates/template-teddyboy/image6.webp",
							href: "/collections/t-shirts-unisex",
						},
					],
				},
				render: ({ categories }) => {
					return <FeaturedCategories categories={categories} />;
				},
			},

			BannerSection: {
				fields: {
					href: { type: "text" },
					image: { type: "text" },
				},
				defaultProps: {
					href: "/collections?new_arrival=true",
					image:
						"https://capconscom.s3.ap-south-1.amazonaws.com/templates/template-teddyboy/new_arrivals.jpg",
				},
				render: ({ href, image }) => {
					return <BannerComponent href={href} image={image} />;
				},
			},

			ProductListing: {
				fields: {
					title: { type: "text" },
				},
				defaultProps: {
					title: "Hello world",
				},
				render: ({ title }) => {
					return <ProductListing />;
				},
			},
		},
	},
	pageState: {
		root: {
			props: {},
		},
		content: [
			{
				type: "HeroSection",
				props: {
					slides: [
						{
							content:
								"https://capconscom.s3.ap-south-1.amazonaws.com/templates/template-teddyboy/tbanner1.webp",
						},
						{
							content:
								"https://capconscom.s3.ap-south-1.amazonaws.com/templates/template-teddyboy/tbanner2.webp",
						},
						{
							content:
								"https://capconscom.s3.ap-south-1.amazonaws.com/templates/template-teddyboy/tbanner3.webp",
						},
					],
					id: "HeroSection-fdd4e43d-89ec-4d2f-a3bf-9321109a0329",
				},
			},
			{
				type: "FeaturedSection",
				props: {
					categories: [
						{
							id: 1,
							name: "Category 1",
							image:
								"https://assets.capcons.social/templates/template-teddyboy/image1.webp",
							href: "/collections/jeans-unisex",
						},
						{
							id: 2,
							name: "Category 2",
							image:
								"https://assets.capcons.social/templates/template-teddyboy/image2.webp",
							href: "/collections/clothing-tops-unisex",
						},
						{
							id: 3,
							name: "Category 3",
							image:
								"https://assets.capcons.social/templates/template-teddyboy/image3.webp",
							href: "/collections/cargo-pants-unisex",
						},
						{
							id: 4,
							name: "Category 4",
							image:
								"https://assets.capcons.social/templates/template-teddyboy/image4.webp",
							href: "/collections/pants-unisex",
						},
						{
							id: 5,
							name: "Category 5",
							image:
								"https://assets.capcons.social/templates/template-teddyboy/image5.webp",
							href: "/collections/pants-unisex",
						},
						{
							id: 6,
							name: "Category 6",
							image:
								"https://assets.capcons.social/templates/template-teddyboy/image6.webp",
							href: "/collections/t-shirts-unisex",
						},
					],
					id: "FeaturedSection-1b453d1e-ce8d-46b1-8698-416b15b4006a",
				},
			},
			{
				type: "BannerSection",
				props: {
					href: "/collections?new_arrival=true",
					image:
						"https://capconscom.s3.ap-south-1.amazonaws.com/templates/template-teddyboy/new_arrivals.jpg",
					id: "BannerSection-6dba689d-3ccc-42f3-abb9-20991f41a4a6",
				},
			},
			{
				type: "ProductListing",
				props: {
					title: "Hello world",
					id: "ProductListing-fa863b83-a7ce-49a4-88af-4de7c22c241e",
				},
			},
		],
		zones: {},
	},
	pageId: "8d0c3a26-78df-46ef-bae2-6d767fe28240",
	pagename: "Landing",
};
