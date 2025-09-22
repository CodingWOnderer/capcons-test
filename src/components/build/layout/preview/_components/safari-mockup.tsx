import { Maximize } from "lucide-react";
import type React from "react";
import ViewPortSelector from "../../_components/ViewPortSelector";
import type { Viewport } from "@measured/puck";
import { useEditorStore } from "@/components/build/store/editor.store";

export default function WebsitePreview({
	children,
	url,
	path,
	viewport,
}: {
	children: React.ReactNode;
	url?: string;
	path?: string;
	viewport: Viewport;
}) {
	const setPreviewDialogOpen = useEditorStore((s) => s.setPreviewDialogOpen);
	return (
		<div
			className="mx-auto transition-all ease-linear"
			style={{ maxWidth: viewport.width }}
		>
			<div className="rounded-xl overflow-hidden border border-border bg-muted">
				<div className="px-4 py-2 flex items-center gap-4 border-b border-border bg-card">
					<div className="flex items-center gap-2">
						<div className="w-3 h-3 bg-red-500 rounded-full border border-red-600"></div>
						<div className="w-3 h-3 bg-yellow-400 rounded-full border border-yellow-500"></div>
						<div className="w-3 h-3 bg-green-500 rounded-full border border-green-600"></div>
					</div>

					<div className="flex-1 mx-auto max-w-4xl flex items-center">
						<div className="flex-1 bg-muted rounded-lg px-4 py-1.5 flex items-center gap-3 border border-border">
							<div className="w-4 h-4 text-muted-foreground">
								<ViewPortSelector />
							</div>
							<span className="text-foreground/80 text-xs font-medium">
								{`https://${url ?? ""}/${path ?? ""}`}
							</span>
						</div>
					</div>

					<div className="flex items-center gap-1">
						<button
							onClick={() => setPreviewDialogOpen(true)}
							type="button"
							className="p-1.5 hover:bg-muted rounded-md"
						>
							<Maximize className="w-4 h-4 text-muted-foreground" />
						</button>
					</div>
				</div>

				<div className="bg-background h-[calc(100vh-125px)]">{children}</div>
			</div>
		</div>
	);
}
