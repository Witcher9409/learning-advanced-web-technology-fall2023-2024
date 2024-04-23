import Link from 'next/link';

export default function LoginPage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to Our Website</h1>
        <p>Please login to access the content:</p>
        <Link href="/Employee">
          <button style={{ backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px', border: 'none' }}>Login</button>
        </Link>
      </div>
    </div>
  );
}

