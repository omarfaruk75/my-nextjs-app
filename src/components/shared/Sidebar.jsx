// 'use client';

// import Link from 'next/link';
// import { useState } from 'react';


// export default function Sidebar() {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <div >


//             {/* Sidebar */}
//             <div className={`bg-gray-800 text-white w-64 min-h-screen p-4 fixed transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
//                 <h2 className="text-xl font-bold mb-6">Dashboard</h2>
//                 <nav className="space-y-4">
//                     <Link href="/profile" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">

//                         <span>Profile</span>
//                     </Link>
//                     <Link href="/setting" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">

//                         <span>Settings</span>
//                     </Link>
//                 </nav>
//             </div>
//         </div>
//     );
// }
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex">
            {/* Toggle Button for Mobile */}
            <button
                className="p-4 md:hidden bg-gray-800 text-white rounded"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? '✖ Close' : '☰ Menu'}
            </button>

            {/* Sidebar */}
            <div className={`bg-gray-800 text-white w-64 min-h-screen p-4 absolute md:relative transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
                <h2 className="text-xl font-bold mb-6">Side Bar</h2>
                <nav className="space-y-4">
                    <Link href="/" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
                        <span>Home</span>
                    </Link>
                    <Link href="/profile" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
                        <span>Profile</span>
                    </Link>
                    <Link href="/setting" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
                        <span>Settings</span>
                    </Link>
                </nav>
            </div>
        </div>
    );
}
