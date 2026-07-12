import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const users = [
    {
        username: "johnsmith",
        fullname: "John Smith",
        bio: "Football enthusiast",
        age: 24,
        city: "Mumbai",
        address: "Andheri West",
        favouriteSport: "Football",
        level: "Intermediate",
        email: "john@example.com",
        password: "$2b$12$eY1J9qL2W7a8N5..."
    },
    {
        username: "alexking",
        fullname: "Alex King",
        bio: "Loves cricket",
        age: 22,
        city: "Delhi",
        address: "Rohini",
        favouriteSport: "Cricket",
        level: "Beginner",
        email: "alex@example.com",
        password: "$2b$12$Xh82KaL9Pw8F2..."
    },
    {
        username: "mariajones",
        fullname: "Maria Jones",
        bio: "Professional swimmer",
        age: 26,
        city: "Pune",
        address: "Baner",
        favouriteSport: "Swimming",
        level: "Professional",
        email: "maria@example.com",
        password: "$2b$12$Qd9LmA2VnR7..."
    },
    {
        username: "davidlee",
        fullname: "David Lee",
        bio: "Gym addict",
        age: 28,
        city: "Bangalore",
        address: "Indiranagar",
        favouriteSport: "Weightlifting",
        level: "Advance",
        email: "david@example.com",
        password: "$2b$12$Pb81AsLm91..."
    },
    {
        username: "sarahkhan",
        fullname: "Sarah Khan",
        bio: "Basketball player",
        age: 21,
        city: "Hyderabad",
        address: "Banjara Hills",
        favouriteSport: "Basketball",
        level: "Intermediate",
        email: "sarah@example.com",
        password: "$2b$12$UuQ7A91lPk..."
    },
    {
        username: "mikebrown",
        fullname: "Mike Brown",
        bio: "Runner",
        age: 29,
        city: "Chennai",
        address: "Anna Nagar",
        favouriteSport: "Athletics",
        level: "Advance",
        email: "mike@example.com",
        password: "$2b$12$NnA9LpR2Km..."
    },
    {
        username: "emilywhite",
        fullname: "Emily White",
        bio: "Yoga instructor",
        age: 27,
        city: "Kolkata",
        address: "Salt Lake",
        favouriteSport: "Yoga",
        level: "Professional",
        email: "emily@example.com",
        password: "$2b$12$DdL29PwQ1..."
    },
    {
        username: "ryanmartin",
        fullname: "Ryan Martin",
        bio: "Badminton lover",
        age: 23,
        city: "Ahmedabad",
        address: "Navrangpura",
        favouriteSport: "Badminton",
        level: "Intermediate",
        email: "ryan@example.com",
        password: "$2b$12$AsKj92LmV..."
    },
    {
        username: "oliviagreen",
        fullname: "Olivia Green",
        bio: "Tennis champion",
        age: 25,
        city: "Jaipur",
        address: "Malviya Nagar",
        favouriteSport: "Tennis",
        level: "Professional",
        email: "olivia@example.com",
        password: "$2b$12$TyPq91LmR..."
    },
    {
        username: "ethanhall",
        fullname: "Ethan Hall",
        bio: "Cyclist",
        age: 31,
        city: "Lucknow",
        address: "Hazratganj",
        favouriteSport: "Cycling",
        level: "Advance",
        email: "ethan@example.com",
        password: "$2b$12$PlQa91RmK..."
    },
    {
        username: "lucyadams",
        fullname: "Lucy Adams",
        bio: "Chess player",
        age: 20,
        city: "Nagpur",
        address: "Dharampeth",
        favouriteSport: "Chess",
        level: "Beginner",
        email: "lucy@example.com",
        password: "$2b$12$VbQ91LpMm..."
    },
    {
        username: "danielross",
        fullname: "Daniel Ross",
        bio: "Table tennis fan",
        age: 30,
        city: "Surat",
        address: "Adajan",
        favouriteSport: "Table Tennis",
        level: "Advance",
        email: "daniel@example.com",
        password: "$2b$12$LkPq72AzQ..."
    },
    {
        username: "sophiacole",
        fullname: "Sophia Cole",
        bio: "Volleyball captain",
        age: 24,
        city: "Goa",
        address: "Panaji",
        favouriteSport: "Volleyball",
        level: "Professional",
        email: "sophia@example.com",
        password: "$2b$12$QrW89LmAs..."
    },
    {
        username: "liamwilson",
        fullname: "Liam Wilson",
        bio: "Kabaddi player",
        age: 27,
        city: "Indore",
        address: "Vijay Nagar",
        favouriteSport: "Kabaddi",
        level: "Intermediate",
        email: "liam@example.com",
        password: "$2b$12$AaB92LmRt..."
    },
    {
        username: "noahwalker",
        fullname: "Noah Walker",
        bio: "Hockey player",
        age: 26,
        city: "Bhopal",
        address: "MP Nagar",
        favouriteSport: "Hockey",
        level: "Advance",
        email: "noah@example.com",
        password: "$2b$12$PwL82QzNa..."
    }
];
export function TableDemo() {
    return (
        <Table>
            <TableCaption>Registered Users</TableCaption>

            <TableHeader>
                <TableRow>
                    <TableHead>Username</TableHead>
                    <TableHead>Full Name</TableHead>
                    <TableHead>Bio</TableHead>
                    {/* <TableHead>Age</TableHead> */}
                    {/* <TableHead>City</TableHead> */}
                    {/* <TableHead>Address</TableHead> */}
                    <TableHead>Favourite Sport</TableHead>
                    <TableHead>Level</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Password (Hash)</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {users.map((user) => (
                    <TableRow key={user.username}>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.fullname}</TableCell>
                        <TableCell>{user.bio}</TableCell>
                        <TableCell>{user.favouriteSport}</TableCell>
                        <TableCell>{user.level}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell className="font-mono text-xs">
                            {user.password}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={9}>Total Registered Users</TableCell>
                    <TableCell className="text-right">
                        {users.length}
                    </TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}
// make this code such that it demonstrates the users
// with their username , fullname , bio , age , city , address , favourite Sport , level , email and their Password but encrypted
// their should be atleast 15 users

// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableFooter,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"

// const invoices = [
//   {
//     invoice: "INV001",
//     paymentStatus: "Paid",
//     totalAmount: "$250.00",
//     paymentMethod: "Credit Card",
//   },
//   {
//     invoice: "INV002",
//     paymentStatus: "Pending",
//     totalAmount: "$150.00",
//     paymentMethod: "PayPal",
//   },
//   {
//     invoice: "INV003",
//     paymentStatus: "Unpaid",
//     totalAmount: "$350.00",
//     paymentMethod: "Bank Transfer",
//   },
//   {
//     invoice: "INV004",
//     paymentStatus: "Paid",
//     totalAmount: "$450.00",
//     paymentMethod: "Credit Card",
//   },
//   {
//     invoice: "INV005",
//     paymentStatus: "Paid",
//     totalAmount: "$550.00",
//     paymentMethod: "PayPal",
//   },
//   {
//     invoice: "INV006",
//     paymentStatus: "Pending",
//     totalAmount: "$200.00",
//     paymentMethod: "Bank Transfer",
//   },
//   {
//     invoice: "INV007",
//     paymentStatus: "Unpaid",
//     totalAmount: "$300.00",
//     paymentMethod: "Credit Card",
//   },
// ]

// export function TableDemo() {
//   return (
//     <Table>
//       <TableCaption>A list of your recent invoices.</TableCaption>
//       <TableHeader>
//         <TableRow>
//           <TableHead className="w-[100px]">Invoice</TableHead>
//           <TableHead>Status</TableHead>
//           <TableHead>Method</TableHead>
//           <TableHead className="text-right">Amount</TableHead>
//         </TableRow>
//       </TableHeader>
//       <TableBody>
//         {invoices.map((invoice) => (
//           <TableRow key={invoice.invoice}>
//             <TableCell className="font-medium">{invoice.invoice}</TableCell>
//             <TableCell>{invoice.paymentStatus}</TableCell>
//             <TableCell>{invoice.paymentMethod}</TableCell>
//             <TableCell className="text-right">{invoice.totalAmount}</TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//       <TableFooter>
//         <TableRow>
//           <TableCell colSpan={3}>Total</TableCell>
//           <TableCell className="text-right">$2,500.00</TableCell>
//         </TableRow>
//       </TableFooter>
//     </Table>
//   )
// }
// // make this code such that it demonstrates the users
// // with their username , fullname , bio , age , city , address , favourite Sport , level , email and their Password but encrypted
// // their should be atleast 15 users