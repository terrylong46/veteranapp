import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>✅ DD214 Updated™ Frontend Works</h1>
      <p>
        <Link href="/signup">Sign Up</Link> |{' '}
        <Link href="/login">Log In</Link>
      </p>
    </main>
  );
}
