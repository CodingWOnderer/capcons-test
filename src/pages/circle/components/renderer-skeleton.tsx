export default function WebsiteRendererSkeleton() {
  return (
    <div className=" h-screen flex justify-center  pt-20 dark:bg-gradient-to-tr dark:from-mineshaft-700 dark:via-mineshaft-800 dark:to-bunker-700">
      <div className=" w-full p-6 max-w-7xl h-fit mx-auto  animate-pulse">
        <div className="flex flex-col space-y-6">
          <div className="h-10 w-2/3 rounded-lg bg-mineshaft-50 dark:bg-mineshaft-700" />

          <div className="h-40 w-full rounded-xl bg-mineshaft-50 dark:bg-mineshaft-700" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="h-32 rounded-xl bg-mineshaft-50 dark:bg-mineshaft-700" />
            <div className="h-32 rounded-xl bg-mineshaft-50 dark:bg-mineshaft-700" />
            <div className="h-32 rounded-xl bg-mineshaft-50 dark:bg-mineshaft-700" />
          </div>

          <div className="space-y-3">
            <div className="h-5 w-3/5 rounded-md bg-mineshaft-50 dark:bg-mineshaft-700" />
            <div className="h-5 w-2/5 rounded-md bg-mineshaft-50 dark:bg-mineshaft-700" />
            <div className="h-5 w-1/4 rounded-md bg-mineshaft-50 dark:bg-mineshaft-700" />
          </div>
        </div>
      </div>
    </div>
  );
}
