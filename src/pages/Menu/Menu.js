import React from 'react'
import "./Menu.css";

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
          // eslint-disable-next-line
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
        // eslint-disable-next-line
        observer.unobserve(menuRef.current);
      }
    };
  }, [menuRef.current]);

  return (
    <div className="app__menu section__padding app__bg" id="menu">
        <h1 className='headtext__base'>
            Menu
        </h1>
        <div className="app__menu-categories" ref={menuRef}>
          <div className="app__menu-category">
            <h2 className="p__base" style={{fontFamily: "var(--font-alt)", textTransform: "uppercase", paddingBottom: "1rem", marginBottom: "1rem", borderBottom: "0.25rem solid white"}}>
              Espresso Drinks
            </h2>
            <div className="menu__category-content">
              <div className="menu__category-item">
                <div className="menu__item-details">
                  <p className="menu__item-title p__base" style={{fontFamily: "var(--font-alt)"}}>Brewed Coffee</p>
                  <div className="menu__item-description p__alt">12oz - 16oz</div>
                </div>
                <p className='menu__item-price p__alt'>
                  $2.95 - $3.35
                </p>
              </div>
              <div className="menu__category-item">
                <div className="menu__item-details">
                  <p className="menu__item-title p__base" style={{fontFamily: "var(--font-alt)"}}>Espresso</p>
                  <div className="menu__item-description p__alt">2oz</div>
                </div>
                <p className='menu__item-price p__alt'>
                  $3.50
                </p>
              </div>
              <div className="menu__category-item">
                <div className="menu__item-details">
                  <p className="menu__item-title p__base" style={{fontFamily: "var(--font-alt)"}}>Espresso Macchiato</p>
                  <div className="menu__item-description p__alt">4oz</div>
                </div>
                <p className='menu__item-price p__alt'>
                  $3.95
                </p>
              </div>
              <div className="menu__category-item">
                <div className="menu__item-details">
                  <p className="menu__item-title p__base" style={{fontFamily: "var(--font-alt)"}}>Latte</p>
                  <div className="menu__item-description p__alt">12oz - 16oz</div>
                </div>
                <p className='menu__item-price p__alt'>
                  $4.75 - $5.25
                </p>
              </div>
              <div className="menu__category-item">
                <div className="menu__item-details">
                  <p className="menu__item-title p__base" style={{fontFamily: "var(--font-alt)"}}>Cappuccino</p>
                  <div className="menu__item-description p__alt">12oz - 16oz</div>
                </div>
                <p className='menu__item-price p__alt'>
                  $4.75 - $5.25
                </p>
              </div>
              <div className="menu__category-item">
                <div className="menu__item-details">
                  <p className="menu__item-title p__base" style={{fontFamily: "var(--font-alt)"}}>Americano</p>
                  <div className="menu__item-description p__alt">12oz - 16oz</div>
                </div>
                <p className='menu__item-price p__alt'>
                  $3.75 - $3.95
                </p>
              </div>
              <div className="menu__category-item">
                <div className="menu__item-details">
                  <p className="menu__item-title p__base" style={{fontFamily: "var(--font-alt)"}}>Americano Misto</p>
                  <div className="menu__item-description p__alt">12oz - 16oz</div>
                </div>
                <p className='menu__item-price p__alt'>
                  $4.25 - $4.75
                </p>
              </div>
              <div className="menu__category-item">
                <div className="menu__item-details">
                  <p className="menu__item-title p__base" style={{fontFamily: "var(--font-alt)"}}>Flat White</p>
                  <div className="menu__item-description p__alt">8oz</div>
                </div>
                <p className='menu__item-price p__alt'>
                  $4.25
                </p>
              </div>
              <div className="menu__category-item">
                <div className="menu__item-details">
                  <p className="menu__item-title p__base" style={{fontFamily: "var(--font-alt)"}}>Mocha</p>
                  <div className="menu__item-description p__alt">12oz - 16oz</div>
                </div>
                <p className='menu__item-price p__alt'>
                  $5.50 - $6.00
                </p>
              </div>
              <div className="menu__category-item">
                <div className="menu__item-details">
                  <p className="menu__item-title p__base" style={{fontFamily: "var(--font-alt)"}}>Caramel Macchiato</p>
                  <div className="menu__item-description p__alt">12oz - 16oz</div>
                </div>
                <p className='menu__item-price p__alt'>
                  $5.25 - $5.75
                </p>
              </div>
            </div>
          </div>
          <div className="app__menu-category">
            <h2 className="p__base" style={{fontFamily: "var(--font-alt)", textTransform: "uppercase", paddingBottom: "1rem", marginBottom: "1rem", borderBottom: "0.25rem solid white"}}>
              Teas
            </h2>
            <div className="menu__category-content">
              <div className="menu__category-item">
                <div className="menu__item-details">
                  <p className="menu__item-title p__base" style={{fontFamily: "var(--font-alt)"}}>Earl Grey</p>
                </div>
                <p className='menu__item-price p__alt'>
                  $3.50
                </p>
              </div>
              <div className="menu__category-item">
                <div className="menu__item-details">
                  <p className="menu__item-title p__base" style={{fontFamily: "var(--font-alt)"}}>English Breakfast</p>
                </div>
                <p className='menu__item-price p__alt'>
                  $3.50
                </p>
              </div>
              <div className="menu__category-item">
                <div className="menu__item-details">
                  <p className="menu__item-title p__base" style={{fontFamily: "var(--font-alt)"}}>Peppermint</p>
                </div>
                <p className='menu__item-price p__alt'>
                  $3.50
                </p>
              </div>
              <div className="menu__category-item">
                <div className="menu__item-details">
                  <p className="menu__item-title p__base" style={{fontFamily: "var(--font-alt)"}}>Jasmine</p>
                </div>
                <p className='menu__item-price p__alt'>
                  $3.50
                </p>
              </div>
              <div className="menu__category-item">
                <div className="menu__item-details">
                  <p className="menu__item-title p__base" style={{fontFamily: "var(--font-alt)"}}>Chamomile</p>
                </div>
                <p className='menu__item-price p__alt'>
                  $3.50
                </p>
              </div>
            
            </div>
          </div>
          <div className="app__menu-category">
          <h2 className="p__base" style={{fontFamily: "var(--font-alt)", textTransform: "uppercase", paddingBottom: "1rem", marginBottom: "1rem", borderBottom: "0.25rem solid white"}}>
              Iced Drinks
            </h2>
            <div className="menu__category-content">
              <div className="menu__category-item">
                <div className="menu__item-details">
                  <p className="menu__item-title p__base" style={{fontFamily: "var(--font-alt)"}}>Iced Americano</p>
                  <div className="menu__item-description p__alt">12oz - 16oz</div>
                </div>
                <p className='menu__item-price p__alt'>
                  $3.75 - $3.95
                </p>
              </div>
              <div className="menu__category-item">
                <div className="menu__item-details">
                  <p className="menu__item-title p__base" style={{fontFamily: "var(--font-alt)"}}>Iced Latte</p>
                  <div className="menu__item-description p__alt">12oz - 16oz</div>
                </div>
                <p className='menu__item-price p__alt'>
                  $4.75 - $5.25
                </p>
              </div>
              <div className="menu__category-item">
                <div className="menu__item-details">
                  <p className="menu__item-title p__base" style={{fontFamily: "var(--font-alt)"}}>Iced Mocha</p>
                  <div className="menu__item-description p__alt">12oz - 16oz</div>
                </div>
                <p className='menu__item-price p__alt'>
                  $5.50 - $6.00
                </p>
              </div>
              <div className="menu__category-item">
                <div className="menu__item-details">
                  <p className="menu__item-title p__base" style={{fontFamily: "var(--font-alt)"}}>Iced Caramel Macchiato</p>
                  <div className="menu__item-description p__alt">12oz - 16oz</div>
                </div>
                <p className='menu__item-price p__alt'>
                  $5.25 - $5.75
                </p>
              </div>
              <div className="menu__category-item">
                <div className="menu__item-details">
                  <p className="menu__item-title p__base" style={{fontFamily: "var(--font-alt)"}}>Iced Chai Latte</p>
                  <div className="menu__item-description p__alt">12oz - 16oz</div>
                  </div>
                <p className='menu__item-price p__alt'>
                  $5.00 - $5.50
                </p>
              </div>
              <div className="menu__category-item">
                <div className="menu__item-details">
                  <p className="menu__item-title p__base" style={{fontFamily: "var(--font-alt)"}}>Iced Matcha Latte</p>
                <div className="menu__item-description p__alt">12oz - 16oz</div>
                </div>
                <p className='menu__item-price p__alt'>
                  $5.00 - $5.50
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Menu