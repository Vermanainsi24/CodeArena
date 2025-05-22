// import { QuickActionType } from "@/constants";
// import { Card } from "./ui/card";

// some weird tw bug, but this is how it works
// from-orange-500/10 via-orange-500/5 to-transparent
// from-blue-500/10 via-blue-500/5 to-transparent
// from-purple-500/10 via-purple-500/5 to-transparent
// from-primary/10 via-primary/5 to-transparent
// from-cyan-400 via-blue-500 to-indigo-500"
// from-green-400 via-teal-500 to-emerald-500
// from-rose-400 via-pink-500 to-fuchsia-500
// from-indigo-500 via-purple-500 to-pink-500

// function ActionCard({ action, onClick }: { action: QuickActionType; onClick: () => void }) {
//   return (
//     <Card
//       className="group relative overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg cursor-pointer"
//       onClick={onClick}
//     >
//       {/* ACTION GRADIENT */}
//       <div
//         className={`absolute inset-0 bg-gradient-to-br ${action.gradient} opacity-100 group-hover:opacity-50 transition-opacity`}
//       />

//       {/* ACTION CONTENT WRAPPER */}
//       <div className="relative p-6 size-full">
//         <div className="space-y-3">
//           {/* ACTION ICON */}
//           <div
//             className={`w-12 h-12 rounded-full flex items-center justify-center bg-${action.color}/10 group-hover:scale-110 transition-transform`}
//           >
//             <action.icon className={`h-6 w-6 text-${action.color}`} />
//           </div>

//           {/* ACTION DETAILS */}
//           <div className="space-y-1">
//             <h3 className="font-semibold text-xl group-hover:text-primary transition-colors">
//               {action.title}
//             </h3>
//             <p className="text-sm text-muted-foreground">{action.description}</p>
//           </div>
//         </div>
//       </div>
//     </Card>
//   );
// }

// export default ActionCard;
// components/ActionCard.tsx

import { Card } from "./ui/card";
import { QuickActionType } from "@/constants";

export function ActionCard({
  action,
  onClick,
}: {
  action: QuickActionType;
  onClick: () => void;
}) {
  return (
    <Card
      className="group relative overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl cursor-pointer rounded-2xl min-h-[220px]"
      onClick={onClick}
    >
      {/* Gradient background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${action.gradient} opacity-100 group-hover:opacity-60 transition-opacity`}
      />

      {/* Content */}
      <div className="relative p-6 h-full flex flex-col justify-between">
        {/* Icon */}
        <div
          className={`w-14 h-14 rounded-full flex items-center justify-center bg-${action.color}/10 group-hover:scale-110 transition-transform`}
        >
          <action.icon className={`h-6 w-6 text-${action.color}`} />
        </div>

        {/* Text */}
        <div className="mt-4 space-y-1">
          <h3 className="font-semibold text-xl group-hover:text-white-500  transition-colors">
            {action.title}
          </h3>
          {/* <p className="text-sm text-muted-foreground">{action.description}</p> */}
          <p className="text-sm text-zinc-800 group-hover:text-black transition-colors">{action.description}</p>

        </div>
      </div>
    </Card>
  );
}

 export default ActionCard;