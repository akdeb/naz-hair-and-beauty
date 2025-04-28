import Link from "next/link"
import { ChevronRight, Clock, MapPin, Phone, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { TestimonialCard } from "./components/testimonial-card"
import { FaInstagram, FaTiktok } from "react-icons/fa";
import Image from "next/image";
import { ServiceCategories } from "./components/ServiceCategories"
// import { Karla } from 'next/font/google';

// const karla = Karla({ 
//   subsets: ['latin'],
//   weight: ['400', '700', '500', '600', '800'],
//   variable: '--font-karla',
// });

const instagramHandle = "nazhairandbeautystratfordroad";
const instagramUrl = `https://instagram.com/${instagramHandle}`;
const tiktokHandle = "nazhairandbeauty1";
const tiktokUrl = `https://tiktok.com/@${tiktokHandle}`;
const phoneNumber = "tel:+447718311650";

// <div className="flex justify-center items-center h-screen">This website is currently unavailable due to unpaid services. Please contact the administrator to restore access.</div>

export default function Home() {
  return (
    // <div className={`${karla.className}`}>
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container px-4 sm:px-6 flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/naz/N.png" 
              alt="Naz Hair & Beauty Logo" 
              width={36} 
              height={36} 
              className="h-8 w-auto"
            />
            <span className="text-lg font-bold tracking-tight whitespace-nowrap">Naz Hair & Beauty</span>
          </Link>
          <nav className="hidden md:flex gap-4 lg:gap-6">
            <Link href="#services" className="text-sm font-medium transition-colors hover:text-primary">
              Services
            </Link>
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#reviews" className="text-sm font-medium transition-colors hover:text-primary">
              Reviews
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center">
            <div className="hidden sm:flex items-center gap-4 mr-4">
              <Link href={tiktokUrl} target="_blank" aria-label="Follow us on TikTok">
                <FaTiktok className="h-5 w-5 text-black transition-colors" />
              </Link>
              <Link href={instagramUrl} target="_blank" aria-label="Follow us on Instagram">
                <FaInstagram className="h-5 w-5 text-pink-500 hover:text-pink-600 transition-colors" />
              </Link>
            </div>
            <Button asChild>
              <Link href={phoneNumber} target="_blank">
                Book Now
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-20 lg:py-28 bg-gradient-to-r from-rose-50 to-pink-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Naz Hair & Beauty Salon
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Experience exceptional hair and beauty services in the heart of Birmingham. Our dedicated team will
                  leave you with a glow that makes you want to come back for more.
                </p>
                
                <div className="flex items-center gap-2 my-2 p-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm w-fit">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-sm font-medium">
                  <Link 
                      href="https://www.google.com/maps/place/Naz+Hair,+Beauty+%26+Designer+Wear/@52.4401897,-1.8532912,17z/data=!3m1!4b1!4m6!3m5!1s0x4870bb1321aa597b:0xd2e967ad7b34532f!8m2!3d52.4401898!4d-1.8484257!16s%2Fg%2F11pdgfw7zy?entry=ttu" 
                      target="_blank"
                      className="flex items-center gap-1 hover:underline"
                    >
                      <span className="font-bold">4.7</span> (380+ reviews)
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href={phoneNumber} target="_blank">
                      Book an Appointment
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="#services">View Services</Link>
                  </Button>
                </div>
                
                <div className="flex items-center gap-2 mt-4">
                  <span className="text-sm font-medium">Follow us on</span>
                  <Link href={tiktokUrl} target="_blank" aria-label="Follow us on TikTok" className="p-2 rounded-full hover:bg-white transition-colors">
                    <FaTiktok className="h-5 w-5 text-black" />
                  </Link>
                  <Link href={instagramUrl} target="_blank" aria-label="Follow us on Instagram" className="p-2 rounded-full hover:bg-white transition-colors">
                    <FaInstagram className="h-5 w-5 text-pink-500" />
                  </Link>
                </div>
              </div>
              <div className="w-full h-full rounded-2xl shadow-lg overflow-hidden">
                <Image
                  src="/naz/store_front.png"
                  alt="Naz Hair and Beauty Salon"
                  className="w-full h-full object-cover"
                  width={800}
                  height={750}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm">Our Services</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Popular Treatments</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a wide range of hair and beauty services to help you look and feel your best.
                </p>
              </div>
            </div>
            
            <ServiceCategories link={phoneNumber} />
            
            <div className="flex justify-center mt-8">
              <Button asChild>
                <Link href={phoneNumber} className="flex items-center gap-1">
                  Book an Appointment <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-gradient-to-r from-rose-50 to-pink-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm">Our Gallery</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Salon Showcase</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed">
                  Take a peek at our salon and some of our beautiful work
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {/* Row 1 */}
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image 
                  src="/naz/client4.webp" 
                  alt="Salon interior" 
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  fill
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image 
                  src="/naz/client.webp" 
                  alt="Hair styling" 
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  fill
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image 
                  src="/naz/products.webp" 
                  alt="Makeup application" 
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  fill
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image 
                  src="/naz/products2.webp" 
                  alt="Nail art" 
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  fill
                />
              </div>
              
              {/* Row 2 */}
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image 
                  src="/naz/client1.webp" 
                  alt="Salon equipment" 
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  fill
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image 
                  src="/naz/client2.webp" 
                  alt="Hair coloring" 
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  fill
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image 
                  src="/naz/client3.webp" 
                  alt="Facial treatment" 
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  fill
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image 
                  src="/naz/products3.webp" 
                  alt="Threading service" 
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  fill
                />
              </div>
            </div>
            
            <div className="flex justify-center mt-8">
              <Button variant="outline" asChild>
                <Link href={instagramUrl} className="flex items-center gap-2" target="_blank">
                  <FaInstagram className="h-5 w-5" />
                  See More on Instagram
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-rose-50 to-pink-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="w-full h-full rounded-2xl shadow-lg overflow-hidden">
                <Image
                  src="/naz/shop.jpg"
                  alt="Naz Hair and Beauty Salon"
                  className="w-full h-full object-cover"
                  width={800}
                  height={750}
                  priority
                />
              </div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm">About Us</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Our Team</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  &quot;Hi, I&apos;m a very dedicated, experienced, and senior hairdresser with a lot of experience but still
                  learning towards new techniques. Really want a smile on your face after the end results of your hair.&quot;
                </p>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Based in Stratford Road, Naz Hair and Beauty is a welcoming and relaxing venue that specialises in
                  Hair and Beauty Treatments. The highly skilled and motivated team will tailor the experience to you
                  and will leave you with a glow that will make you want to go back for more.
                </p>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">What we specialize in:</h3>
                  <ul className="grid gap-2 md:grid-cols-2">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Cut and blow dry</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Hydrafacial</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Balayage</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Waxing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Highlights</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Brands we use:</h3>
                  <p className="text-gray-500">
                    Wella, Morrrocanoil, Keratin, Dermalogica, NXT, NARS, Morphe, Black Caviar, IQ and Olaplex.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Clients Say</h2>
                <div className="flex items-center justify-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="ml-2 text-lg font-medium">4.7 from 380+ reviews</span>
                </div>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <TestimonialCard
                name="Rehna"
                service="Ladies' Dry Haircut"
                review="Really took in to account what I wanted and made suggestions according to my hair type. Was pleasant and patient even though I had my baby on me who was being fussy. Would come again."
                date="about 2 months ago"
              />
              <TestimonialCard
                name="Za"
                service="Facial Threading"
                review="Naz was amazing at the massage, got rid of all my knots, felt relaxing"
                date="about 2 months ago"
              />
              <TestimonialCard
                name="Mariam"
                service="Ladies' Haircut & Blow Dry"
                review="Was okay. Naz was lovely. Service was okay"
                date="2 months ago"
              />
              <TestimonialCard
                name="Za"
                service="Relaxing Massage"
                review="Naz was attentive and went above and beyond to make me feel comfortable and relaxed"
                date="3 months ago"
              />
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline" asChild>
                <Link href={phoneNumber} className="flex items-center gap-1" target="_blank">
                  See All Reviews <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-rose-50 to-pink-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm">Contact Us</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Visit Our Salon</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  We&apos;re conveniently located in Sparkhill, Birmingham. Drop by or book an appointment today.
                </p>
                <Card>
                  <CardContent className="p-6">
                    <div className="grid gap-4">
                      <div className="flex items-start gap-4">
                        <MapPin className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h3 className="font-bold">Address</h3>
                          <p className="text-sm text-gray-500">1078 Stratford Road, Sparkhill, Birmingham, B28 8AD</p>
                        </div>
                      </div>
                      <Separator />
                      <div className="flex items-start gap-4">
                        <Phone className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h3 className="font-bold">Phone</h3>
                          <p className="text-sm text-gray-500">+44 77183 11650</p>
                        </div>
                      </div>
                      <Separator />
                      <div className="flex items-start gap-4">
                        <Clock className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h3 className="font-bold">Opening Hours</h3>
                          <div className="grid grid-cols-2 gap-2 text-sm text-gray-500">
                            <div>Monday - Friday</div>
                            <div>9:00 AM - 6:00 PM</div>
                            <div>Saturday</div>
                            <div>9:00 AM - 6:00 PM</div>
                            <div>Sunday</div>
                            <div>Closed</div>
                          </div>
                        </div>
                      </div>
                      <Separator />
                    <div className="flex items-start gap-4">
                      <FaInstagram className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-bold">Instagram</h3>
                        <p className="text-sm text-gray-500">
                          <Link href={instagramUrl} className="hover:underline" target="_blank">
                            @{instagramHandle}
                          </Link>
                        </p>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-start gap-4">
                      <FaTiktok className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-bold">TikTok</h3>
                        <p className="text-sm text-gray-500">
                          <Link href={tiktokUrl} className="hover:underline" target="_blank">
                            @{tiktokHandle}
                          </Link>
                        </p>
                      </div>
                    </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href={phoneNumber} target="_blank">
                      Book Now
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="tel:+441212345678">Call Us</Link>
                  </Button>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2431.6204868226394!2d-1.8587!3d52.4456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bc7d7e45f8a1%3A0x7f3c!2s1078%20Stratford%20Rd%2C%20Sparkhill%2C%20Birmingham%20B28%208AD!5e0!3m2!1sen!2suk!4v1646579!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Naz Hair & Beauty Salon location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6 md:py-10">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:items-start md:gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-lg font-bold">Naz Hair & Beauty</span>
            </Link>
            <p className="text-center text-sm text-gray-500 md:text-left">
              &copy; {new Date().getFullYear()} Naz Hair & Beauty Salon. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 md:items-end">
            <div className="flex gap-4 items-center">
              <Link href={tiktokUrl} target="_blank" aria-label="Follow us on TikTok">  
                <FaTiktok className="h-5 w-5 hover:text-pink-500 transition-colors" />
              </Link>
              <Link href={instagramUrl} target="_blank" aria-label="Follow us on Instagram">
                <FaInstagram className="h-5 w-5 hover:text-pink-500 transition-colors" />
              </Link>
              <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
                Terms of Service
              </Link>
            </div>
            <p className="text-center text-xs text-gray-400 md:text-right">
              Website built by <Link href="https://www.akadeb.xyz" className="hover:text-primary transition-colors">Elato AI Labs</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
      // </div>
  )
}

