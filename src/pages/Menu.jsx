import React from 'react'

function Menu() {
  const menuRef = React.useRef(null);
  let hasScrolled = true; //CHANGE TO FALSE LATER

  const triggerScrollEffect = (element) => {
    const initialScrollX = element.scrollLeft;
    const scrollAmount = 500;

    element.scrollTo({ left: initialScrollX + scrollAmount, behavior: 'smooth' });

    setTimeout(() => {
      element.scrollTo({ left: initialScrollX, behavior: 'smooth' });
    }, 1000);
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasScrolled) {
          triggerScrollEffect(menuRef.current);
          hasScrolled = true;
        }
      },
      { threshold: 0.5 }
    );

    if (menuRef.current) {
      observer.observe(menuRef.current);
    }
    return () => {
      if (menuRef.current) {
        observer.unobserve(menuRef.current);
      }
    };
  }, [menuRef.current]);

  return (
    <div className="w-full min-h-screen bg-app p-8" id="menu">
      <h1 className="text-center text-4xl font-alt text-white">
        Menu
      </h1>
      <div className="flex overflow-x-scroll gap-16 mt-8" ref={menuRef}>
        <div className="min-w-[40%]">
          <h2 className="text-white text-xl font-alt uppercase pb-4 mb-4 border-b-2 border-white">
            Espresso Drinks
          </h2>
          <div className="flex flex-col gap-4">
            {[
              { title: 'Brewed Coffee', description: '12oz - 16oz', price: '$2.95 - $3.35' },
              { title: 'Espresso', description: '2oz', price: '$3.50' },
              { title: 'Espresso Macchiato', description: '4oz', price: '$3.95' },
              { title: 'Latte', description: '12oz - 16oz', price: '$4.75 - $5.25' },
              { title: 'Cappuccino', description: '12oz - 16oz', price: '$4.75 - $5.25' },
              { title: 'Americano', description: '12oz - 16oz', price: '$3.75 - $3.95' },
              { title: 'Americano Misto', description: '12oz - 16oz', price: '$4.25 - $4.75' },
              { title: 'Flat White', description: '8oz', price: '$4.25' },
              { title: 'Mocha', description: '12oz - 16oz', price: '$5.50 - $6.00' },
              { title: 'Caramel Macchiato', description: '12oz - 16oz', price: '$5.25 - $5.75' },
            ].map((item, index) => (
              <div className="flex justify-between items-end" key={index}>
                <div>
                  <p className="font-alt text-lg text-white">{item.title}</p>
                  <div className="text-sm text-gray-300">{item.description}</div>
                </div>
                <p className="text-sm text-gray-300">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="min-w-[40%]">
          <h2 className="text-white text-xl font-alt uppercase pb-4 mb-4 border-b-2 border-white">
            Teas
          </h2>
          <div className="flex flex-col gap-4">
            {[
              { title: 'Earl Grey', price: '$3.50' },
              { title: 'English Breakfast', price: '$3.50' },
              { title: 'Peppermint', price: '$3.50' },
              { title: 'Jasmine', price: '$3.50' },
              { title: 'Chamomile', price: '$3.50' },
            ].map((item, index) => (
              <div className="flex justify-between items-end" key={index}>
                <p className="font-alt text-lg text-white">{item.title}</p>
                <p className="text-sm text-gray-300">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="min-w-[40%]">
          <h2 className="text-white text-xl font-alt uppercase pb-4 mb-4 border-b-2 border-white">
            Iced Drinks
          </h2>
          <div className="flex flex-col gap-4">
            {[
              { title: 'Iced Americano', description: '12oz - 16oz', price: '$3.75 - $3.95' },
              { title: 'Iced Latte', description: '12oz - 16oz', price: '$4.75 - $5.25' },
              { title: 'Iced Mocha', description: '12oz - 16oz', price: '$5.50 - $6.00' },
              { title: 'Iced Caramel Macchiato', description: '12oz - 16oz', price: '$5.25 - $5.75' },
              { title: 'Iced Chai Latte', description: '12oz - 16oz', price: '$5.00 - $5.50' },
              { title: 'Iced Matcha Latte', description: '12oz - 16oz', price: '$5.00 - $5.50' },
            ].map((item, index) => (
              <div className="flex justify-between items-end" key={index}>
                <div>
                  <p className="font-alt text-lg text-white">{item.title}</p>
                  <div className="text-sm text-gray-300">{item.description}</div>
                </div>
                <p className="text-sm text-gray-300">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
