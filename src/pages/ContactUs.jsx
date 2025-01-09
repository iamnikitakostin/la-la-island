const ContactUs = () => {
    return (
        <section id="contact" className="py-20 px-6 bg-[#1e2328]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-center text-[#fff] mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8 text-[#fff]">
              <div>
                <h3 className="text-xl font-medium mb-2 text-[#f5a201]">Address</h3>
                <p>2951 W Broadway<br />Vancouver, BC</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2 text-[#f5a201]">Open Hours</h3>
                <p>Mon - Sun: 8 a.m. – 6 p.m.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2 text-[#f5a201]">Call Us</h3>
                <p>+1 (604) 423-5811</p>
              </div>
            </div>
            <div className="h-[400px] rounded-lg overflow-hidden">
              <iframe
                title="La La Island Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.6386351707306!2d-123.1740380235121!3d49.26429487139004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486736253d8951d%3A0x919eb0dc8147b132!2sLa%20La%20Island!5e0!3m2!1sen!2sca!4v1717347655390!5m2!1sen!2sca"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    );
};

export default ContactUs;