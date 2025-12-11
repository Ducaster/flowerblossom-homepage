export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="bg-[#1a1a1a] text-white border-t border-gray-800"
      style={{ padding: '24px 0', textAlign: 'center' }}
    >
      <p className="text-gray-500 text-sm">
        &copy; {currentYear} 꽃보나보. All rights reserved.
      </p>
    </footer>
  );
}
