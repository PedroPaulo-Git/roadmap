
// interface RoadmapData {
//   title: string;
//   description: string;
//   freeResources: Array<{
//     title: string;
//     url: string;
//     type: 'video' | 'article' | 'course';
//   }>;
//   paidResources: Array<{
//     title: string;
//     url: string;
//     platform: string;
//     price?: string;
//   }>;
// }


// const RoadmapNode = ({ data }: { data: RoadmapData & { onNodeClick: (data: RoadmapData) => void } }) => {
//   return (
//     <div 
//       className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400 cursor-pointer hover:border-blue-500 transition-colors"
//       onClick={() => data.onNodeClick(data)}
//     >
//       <div className="flex items-center">
//         <div className="ml-2">
//           <div className="text-lg font-bold">{data.title}</div>
//         </div>
//       </div>
//     </div>
//   );
// };