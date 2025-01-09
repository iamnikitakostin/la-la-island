const Menu = () => {
    const menuItems = {
      "Espresso Drinks": [
        { name: "Brewed Coffee", size: "12oz - 16oz", price: "$2.95 - $3.35" },
        { name: "Espresso", size: "2oz", price: "$3.50" },
        // ... other espresso drinks
      ],
      "Teas": [
        { name: "Earl Grey", price: "$3.50" },
        { name: "English Breakfast", price: "$3.50" },
        // ... other teas
      ],
      "Iced Drinks": [
        { name: "Iced Americano", size: "12oz - 16oz", price: "$3.75 - $3.95" },
        { name: "Iced Latte", size: "12oz - 16oz", price: "$4.75 - $5.25" },
        // ... other iced drinks
      ]
    };
  
    return (
        <section id="menu" className="py-20 px-6 bg-[#1e2328]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-center text-[#fff] mb-12">Menu</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(menuItems).map(([category, items]) => (
              <div key={category} className="bg-[#3b3f46] p-6 rounded-lg">
                <h3 className="text-2xl text-[#f5a201] mb-6 pb-2 border-b border-[#f5a201]">
                  {category}
                </h3>
                <div className="space-y-4">
                  {items.map((item, index) => (
                    <div key={index} className="flex justify-between text-[#fff]">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        {item.size && (
                          <p className="text-sm text-[#fed053]">{item.size}</p>
                        )}
                      </div>
                      <p className="text-[#74a065]">{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default Menu;