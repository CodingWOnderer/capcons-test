import { Heading } from "@/components/v1/heading/heading";
import { Text } from "@/components/v1/text/text";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export default function ContactusSection() {
  return (
    <div className="relative isolate bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <Heading >
              Get in touch
            </Heading>
            <Text className="mt-6 ">
              Have questions, feedback, or want to know more about Teddy Boy?
              We’d love to hear from you. Reach out to us through any of the
              contact details below, or fill out the form to send us a direct
              message.
            </Text>
            <dl className="mt-10 space-y-4 text-sm/6 text-muted-foreground">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon
                    aria-hidden="true"
                    className=" size-5 text-muted-foreground"
                  />
                </dt>
                <dd>
                  TEDDYBOY WAREHOUSE
                  <br />
                  X-396, Ram Nagar, Gali No. 5, Gandhi Nagar,
                  <br />
                  East Delhi, Delhi, 110031
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon
                    aria-hidden="true"
                    className="size-5 text-muted-foreground"
                  />
                </dt>
                <dd>
                  <a
                    href="tel:+91-9811304466"
                    className="hover:text-foreground"
                  >
                    +91 9811304466
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon
                    aria-hidden="true"
                    className="size-5 text-muted-foreground"
                  />
                </dt>
                <dd>
                  <a
                    href="mailto:manishshjethani.44@rediffmail.com"
                    className="hover:text-foreground"
                  >
                    manishshjethani.44@rediffmail.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form
          action="#"
          method="POST"
          className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48"
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm/6 font-semibold text-foreground"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-background px-3.5 py-2 text-base text-foreground border border-input placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm/6 font-semibold text-foreground"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md bg-background px-3.5 py-2 text-base text-foreground border border-input placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-semibold text-foreground"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md bg-background px-3.5 py-2 text-base text-foreground border border-input placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm/6 font-semibold text-foreground"
                >
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    id="phone-number"
                    name="phone-number"
                    type="tel"
                    autoComplete="tel"
                    className="block w-full rounded-md bg-background px-3.5 py-2 text-base text-foreground border border-input placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm/6 font-semibold text-foreground"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md bg-background px-3.5 py-2 text-base text-foreground border border-input placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Send message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
