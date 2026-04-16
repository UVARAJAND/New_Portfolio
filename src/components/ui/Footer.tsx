import Link from "next/link"
import { siteContent } from "@/lib/content"

export function Footer() {
  const footerLinks = [
    { label: "Privacy", href: siteContent.footer.links.privacy },
    { label: "GitHub", href: siteContent.footer.links.github },
    { label: "LinkedIn", href: siteContent.footer.links.linkedin },
  ].filter((link) => link.href && link.href !== "#")

  return (
    <footer className="w-full border-t border-bg-elevated bg-bg-page py-[32px] px-6 md:px-[80px]">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <span className="text-[20px] font-bold font-display text-accent-primary tracking-tight">{siteContent.footer.brand}</span>
          <span className="text-[13px] text-muted font-sans font-medium">{siteContent.footer.copyright}</span>
        </div>
        <div className="flex items-center gap-6">
          {footerLinks.map((link) => (
            <Link key={link.label} href={link.href} target="_blank" rel="noreferrer" className="text-[13px] text-muted font-sans hover:text-body transition-colors">
              {link.label}
            </Link>
          ))}
          <Link href="#home" className="text-[13px] text-muted font-sans hover:text-body transition-colors">Back to Top</Link>
        </div>
      </div>
    </footer>
  )
}
