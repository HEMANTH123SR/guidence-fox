// import { File, Folder, Tree } from "@/components/magicui/file-tree";

// export function SchoolTree() {
//   return (
//     <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden  text-lg">
//       <Tree
//         className="p-2 overflow-hidden "
//         initialSelectedId="7"
//         initialExpandedItems={[
//           "1",
//           "2",
//           "3",
//           "4",
//           "5",
//           "6",
//           "7",
//           "8",
//           "9",
//           "10",
//           "11",
//         ]}
//         elements={ELEMENTS}
//       >
//         <Folder element="src" value="1">
//           <Folder value="2" element="app">
//             <File value="3">
//               <p className="">layout.tsx</p>
//             </File>
//             <File value="4">
//               <p>page.tsx</p>
//             </File>
//           </Folder>
//           <Folder value="5" element="components">
//             <Folder value="6" element="ui">
//               <File value="7">
//                 <p>button.tsx</p>
//               </File>
//             </Folder>
//             <File value="8">
//               <p>header.tsx</p>
//             </File>
//             <File value="9">
//               <p>footer.tsx</p>
//             </File>
//           </Folder>
//           <Folder value="10" element="lib">
//             <File value="11">
//               <p>utils.ts</p>
//             </File>
//           </Folder>
//         </Folder>
//       </Tree>
//     </div>
//   );
// }

// const ELEMENTS = [
//   {
//     id: "1",
//     isSelectable: true,
//     name: "src",
//     children: [
//       {
//         id: "2",
//         isSelectable: true,
//         name: "app",
//         children: [
//           {
//             id: "3",
//             isSelectable: true,
//             name: "layout.tsx",
//           },
//           {
//             id: "4",
//             isSelectable: true,
//             name: "page.tsx",
//           },
//         ],
//       },
//       {
//         id: "5",
//         isSelectable: true,
//         name: "components",
//         children: [
//           {
//             id: "6",
//             isSelectable: true,
//             name: "header.tsx",
//           },
//           {
//             id: "7",
//             isSelectable: true,
//             name: "footer.tsx",
//           },
//         ],
//       },
//       {
//         id: "8",
//         isSelectable: true,
//         name: "lib",
//         children: [
//           {
//             id: "9",
//             isSelectable: true,
//             name: "utils.ts",
//           },
//         ],
//       },
//     ],
//   },
// ];


import React from 'react';
import { File, Folder, Tree } from "@/components/magicui/file-tree";

export function SchoolTree() {
  return (
    <Tree>
      {/* <Folder element="Schools" defaultChecked>
        <Folder value="Middle Schools" >
          <File name="Grade 6" />
          <File name="Grade 7" />
          <File name="Grade 8" />
        </Folder>
        <Folder name="High Schools" defaultOpen>
          <File name="Grade 9" />
          <File name="Grade 10" />
          <File name="Grade 11" />
          <File name="Grade 12" />
        </Folder>
      </Folder>
      <Folder name="Resources">
        <File name="Curriculum" />
        <File name="Extracurricular Activities" />
        <File name="College Prep" />
      </Folder>
      <Folder name="Administrative">
        <File name="Staff Directory" />
        <File name="School Calendar" />
        <File name="Policies" />
      </Folder> */}
      <Folder isSelect element='Schools' value=''>

      </Folder>
    </Tree>
  );
}

const SCHOOL_ELEMENTS = [
  {
    id: "1",
    isSelectable: true,
    name: "Schools",
    children: [
      {
        id: "2",
        isSelectable: true,
        name: "Middle Schools",
        children: [
          { id: "3", isSelectable: true, name: "Grade 6" },
          { id: "4", isSelectable: true, name: "Grade 7" },
          { id: "5", isSelectable: true, name: "Grade 8" },
        ],
      },
      {
        id: "6",
        isSelectable: true,
        name: "High Schools",
        children: [
          { id: "7", isSelectable: true, name: "Grade 9" },
          { id: "8", isSelectable: true, name: "Grade 10" },
          { id: "9", isSelectable: true, name: "Grade 11" },
          { id: "10", isSelectable: true, name: "Grade 12" },
        ],
      },
    ],
  },
  {
    id: "11",
    isSelectable: true,
    name: "Resources",
    children: [
      { id: "12", isSelectable: true, name: "Curriculum" },
      { id: "13", isSelectable: true, name: "Extracurricular Activities" },
      { id: "14", isSelectable: true, name: "College Prep" },
    ],
  },
  {
    id: "15",
    isSelectable: true,
    name: "Administrative",
    children: [
      { id: "16", isSelectable: true, name: "Staff Directory" },
      { id: "17", isSelectable: true, name: "School Calendar" },
      { id: "18", isSelectable: true, name: "Policies" },
    ],
  },
];

export default SchoolTree;