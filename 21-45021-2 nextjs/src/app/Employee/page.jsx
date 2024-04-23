import Link from 'next/link';

export default function Home() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <div style={{ textAlign: 'center' }}>
                <h1>Manage Employees</h1>
                <input type="text" placeholder="Search Employee Info" />
                <ul>
                    <li>
                        <Link href="/Employee/register">Register Employee</Link>
                    </li>
                    <li>
                        <Link href="/Employee/update">Update Employee Info</Link>
                    </li>
                    <li>
                        <Link href="/Employee/delete">Delete Employee Info</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
