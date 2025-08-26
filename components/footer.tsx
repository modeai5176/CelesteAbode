import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-secondary">Contact</h3>
            <div className="space-y-3">
              <p>+91 8851663066</p>
              <p>celesteabode@gmail.com</p>
              <p>Noida, India</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-secondary">Social</h3>
            <div className="space-y-3">
              <a href="#" className="block hover:text-secondary transition-colors">
                Facebook
              </a>
              <a href="#" className="block hover:text-secondary transition-colors">
                Instagram
              </a>
              <a href="#" className="block hover:text-secondary transition-colors">
                LinkedIn
              </a>
              <a href="#" className="block hover:text-secondary transition-colors">
                X
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-secondary">Company</h3>
            <div className="space-y-3">
              <a href="#" className="block hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block hover:text-secondary transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="block hover:text-secondary transition-colors">
                Refund Policy
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-secondary">Newsletter</h3>
            <p className="text-white/80 mb-4">Stay updated with our latest properties</p>
            <div className="flex gap-2">
              <Input
                placeholder="Your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="bg-secondary hover:bg-secondary/90 text-white">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/80">© 2035 Celeste Abode. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
