import React, { useState, useEffect, useCallback, useRef } from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/v1/carousel/carousel";
import type { CarouselApi } from "@/components/v1/carousel/carousel";
import Autoplay from "embla-carousel-autoplay";

type Slide = {
	content: string;
};

interface HeroCarouselProps {
	slides: Slide[];
}

const DOT_CONTAINER_WIDTH = 32;
const DOT_INACTIVE_WIDTH = 12;
const DOT_HEIGHT = 6;

const HeroCarousel: React.FC<HeroCarouselProps> = ({ slides }) => {
	const autoplaySpeed = 3000;
	const [activeIndex, setActiveIndex] = useState<number>(0);
	const [progress, setProgress] = useState<number>(0);
	const [api, setApi] = useState<CarouselApi>();

	const plugin = useRef(
		Autoplay({ delay: autoplaySpeed, stopOnInteraction: true }),
	);

	useEffect(() => {
		if (!api) return;
		setActiveIndex(api.selectedScrollSnap());

		const onSelect = () => setActiveIndex(api.selectedScrollSnap());
		api.on("select", onSelect);

		return () => {
			api.off("select", onSelect);
		};
	}, [api]);

	useEffect(() => {
		setProgress(0);
		let start: number | null = null;
		let animationFrame: number;

		const step = (timestamp: number) => {
			if (start === null) start = timestamp;
			const elapsed = timestamp - start;
			const percentage = Math.min((elapsed / autoplaySpeed) * 100, 100);
			setProgress(percentage);

			if (percentage < 100) {
				animationFrame = requestAnimationFrame(step);
			}
		};

		animationFrame = requestAnimationFrame(step);
		return () => cancelAnimationFrame(animationFrame);
	}, [activeIndex, autoplaySpeed]);

	const handleDotClick = useCallback(
		(index: number) => {
			api?.scrollTo(index);
		},
		[api],
	);

	return (
		<div className="mx-auto md:px-8 pb-20 mt-2">
			<Carousel
				setApi={setApi}
				className="w-full"
				plugins={[plugin.current]}
				onMouseEnter={plugin.current.stop}
				onMouseLeave={plugin.current.reset}
			>
				<CarouselContent>
					{slides.map((slide, index) => (
						<CarouselItem key={index}>
							<div className="h-[650px] sm:min-h-6/12 flex md:rounded-lg md:overflow-clip relative items-center justify-center bg-zinc-200">
								<img
									alt={`slide-${index}`}
									className="object-cover size-full"
									src={slide.content || "/placeholder.svg"}
								/>
								<div className="absolute inset-0 bg-black/10"></div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>

			<div className="relative -mt-14">
				<div className="flex justify-center items-center gap-1">
					{slides.map((_, i) => (
						<button
							key={i}
							type="button"
							onClick={() => handleDotClick(i)}
							className="cursor-pointer"
							style={{
								width: `${DOT_CONTAINER_WIDTH}px`,
								height: `${DOT_HEIGHT}px`,
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<div
								className="bg-gray-300 rounded-full relative overflow-hidden"
								style={{
									width:
										i === activeIndex
											? `${DOT_CONTAINER_WIDTH}px`
											: `${DOT_INACTIVE_WIDTH}px`,
									height: `${DOT_HEIGHT}px`,
									transition: "width 300ms ease-in-out",
								}}
							>
								{i === activeIndex && (
									<div
										className="absolute top-0 left-0 h-full bg-zinc-900"
										style={{ width: `${progress}%` }}
									/>
								)}
							</div>
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default React.memo(HeroCarousel);
