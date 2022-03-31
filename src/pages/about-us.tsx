import Image from "next/image";

export default function AboutUs() {
  return (
    <main>
      <section className="py-24">
        <div className="container grid items-center grid-cols-2 mx-auto">
          <div className="grid gap-8 place-items-center">
            <div className="max-w-lg">
              <h1 className="text-5xl font-semibold">Our Mission</h1>
              <p className="mt-6 text-lg font-semibold">
                We want to help improve the quality of life of every single
                caregiver and person living with dementia in the world
              </p>
              <p className="mt-6">
                For caregivers, this means reducing burnout and knowing how to
                provide the best care possible.
              </p>
              <p className="mt-6">
                For the people living with dementia, this means greater
                independence and staying at home for longer.
              </p>
            </div>
          </div>
          <div className="grid place-items-center">
            <Image
              src="/help-mate-mountain.png"
              layout="intrinsic"
              alt="Mountain"
              width={300}
              height={300}
              objectFit="cover"
            />
          </div>
        </div>
      </section>
      <section className="py-32 text-center text-white bg-electric-violet-500">
        <div className="container grid mx-auto place-items-center">
          <div>
            <h2 className="text-5xl font-semibold">The Team</h2>
            <p className="mt-6 max-w-prose">
              We are an interdisciplinary team with personal experience caring
              for loved ones with dementia. Our expertise spans product, growth,
              biomedical engineering, and medical research. We have a collective
              experience working in healthcare at public hospitals, research
              institutes, and startups.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container grid items-center grid-cols-2 mx-auto">
          <div className="grid place-items-center">
            <Image
              src="/help-mate-earth.png"
              layout="intrinsic"
              alt="Mountain"
              width={400}
              height={400}
              objectFit="cover"
            />
          </div>
          <div className="grid gap-8 place-items-center">
            <div className="max-w-lg">
              <h2 className="text-5xl font-semibold">Our Vision</h2>
              <p className="mt-6">
                Alongside you, we hope to be able to create a world where every
                single caregiver feels and is capable of providing the best
                possible care, and every person with dementia being cared for
                has the best quality of life possible because they are using
                HelpMate.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 text-white bg-electric-violet-500">
        <div className="container mx-auto">
          <h2>Why we exist</h2>
          <p>
            Living with dementia isn&apos;t easy. Caring for someone living with
            dementia isn&apos;t easy either. The current state of caregiving
            after a diagnosis lacks personalised care support, scattered
            resources, and caregivers often left to their own devices. Combined
            with an under-resourced aged care system, this leads to extremely
            burnt-out caregivers and a lack of quality care for people with
            dementia.
          </p>
          <div className="grid items-start grid-cols-4 gap-8 mt-6 ">
            <div className="text-center">
              <Image
                src="/help-mate-documents.png"
                layout="fixed"
                height={40}
                width={40}
                objectFit="contain"
                alt="Documents"
              />
              <h3 className="text-lg font-semibold">
                Lack of information after a diagnosis.
              </h3>
              <p className="mt-3">
                The majority of caregivers and people with dementia are left
                with little information after a diagnosis, sometimes given a few
                pamphlets at most, leaving most to turn to Dr. Google.
              </p>
            </div>
            <div className="text-center">
              <Image
                src="/help-mate-documents.png"
                layout="fixed"
                height={40}
                width={40}
                objectFit="contain"
                alt="Documents"
              />
              <h3 className="text-lg font-semibold">
                Overwhelmingly scattered resources online.
              </h3>
              <p className="mt-3">
                A lot of information online which can overwhelm caregivers, they
                don&apos;t know what applies to them, what doesn&apos;t, and
                what is most important at their stage.
              </p>
            </div>
            <div className="text-center">
              <Image
                src="/help-mate-documents.png"
                layout="fixed"
                height={40}
                width={40}
                objectFit="contain"
                alt="Documents"
              />
              <h3 className="text-lg font-semibold">
                Lack of health care package funding.
              </h3>
              <p className="mt-3">
                In Australia, it can take up to 12 months to get the right level
                of health care package funding. During this, caregivers are left
                to provide care unsupported, often burning out under intense
                stress.
              </p>
            </div>
            <div className="text-center">
              <Image
                src="/help-mate-documents.png"
                layout="fixed"
                height={40}
                width={40}
                objectFit="contain"
                alt="Documents"
              />
              <h3 className="text-lg font-semibold">
                Poor access to specialists for personalised care.
              </h3>
              <p className="mt-3">
                Occupational therapists can provide tailored care strategies for
                the caregiver and create detailed care plans that are reviewed
                and revised. However, accessibility is often an issue.
              </p>
            </div>
          </div>
          <p className="mt-6">
            No matter what type of dementia it may be (Alzheimer&apos;s, Lewy
            Body dementia, frontotemporal dementia, vascular dementia, etc.),
            accessing all of the above in a single platform will empower
            caregivers to provide the best care possible to the person living
            with dementia, as well as take care of their own wellbeing.
            Ultimately, HelpMate aims to improve the quality of life of both
            parties.
          </p>
        </div>
      </section>
    </main>
  );
}
