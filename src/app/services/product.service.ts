// src/app/services/product.service.ts
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable, of } from 'rxjs'; // Import 'of' to return static dat
import { Section } from '../models/section.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  // Static array of products
  private products: Product[] = [
    { id: 1, name: 'Product 1', imageUrl: 'assets/images/product1.jpg', description: 'Description for product 1' },
    { id: 2, name: 'Product 2', imageUrl: 'assets/images/product2.jpg', description: 'Description for product 2' },
    // Add more products as needed
  ];

  // Static array of sections, each containing products
  private sections: Section[] = [
    {
      id: 1,
      name: 'Consumables / Medical Devices',
      products: [
        { id: 1,
          name: 'Oxygen Therapy',
          imageUrl: 'assets/images/productA1.jpg',
          description: `<div class="container my-4">
                          <p>Oxygen therapy is used to treat patients with low oxygen levels in their blood. It involves breathing in oxygen through a mask or nasal cannula. In some cases, aerosol therapy may be combined with oxygen therapy.</p>
                        </div>`
        },

        { id: 2,
          name: 'Aerosol & Nebulizer Mask',
          imageUrl: 'assets/images/productA2.jpg',
          description: `<div class="container my-4">
                          <p>Aerosol therapy is a type of respiratory therapy that delivers medication directly to the lungs. It is used to treat respiratory diseases such as asthma, chronic obstructive pulmonary disease (COPD), and cystic fibrosis. The therapy works by using a nebulizer to convert liquid medication into a fine mist that can be inhaled through a mask or mouthpiece.</p>

                          <p>A nebulizer is a machine that turns liquid solutions into fine mist droplets, typically by using oxygen, compressed air, or ultrasonic power to create an aerosol mixture.</p>

                          <p>Medically, a nebulizer is a treatment and medication delivery device used to administer medicated and non-medicated liquids (in the form of a fine aerosol mist) to an afflicted area within the respiratory system.</p>
                        </div>`
        },

        

        { id: 3,
          name: 'Venturi Mask',
          imageUrl: 'assets/images/productA2.jpg',
          description: `<div class="container">
                          <h3>Venturi Mask</h3>
                          <p>The venturi mask, also known as an air-entrainment mask, is a medical device used to deliver a precise amount of oxygen concentration to patients on controlled oxygen therapy. Venturi masks are designed to deliver a constant fraction of inspired oxygen (FiO2) regardless of the patient's respiratory and flow pattern (i.e., a fixed-performance device).</p>

                          <ul>
                            <li><strong>Purpose:</strong> They are used to deliver oxygen to patients with chronic obstructive pulmonary disease (COPD) due to the risk of type 2 respiratory failure.</li>
                            <li><strong>Flow:</strong> The venturi mask can deliver high flow oxygen. The British Thoracic Society recommends the use of venturi masks for acutely breathless patients requiring low doses of oxygen, as they deliver a more reliable oxygen concentration than nasal cannulas or simple face masks.</li>
                          </ul>

                          <h4>Advantages:</h4>
                          <ul>
                            <li>Helps to provide the precise level of FiO2</li>
                            <li>Humidification is not needed</li>
                          </ul>

                          <h4 class="text-center">Oxygen Flow Rate of Venturi Masks</h4>
                          <table class="table table-bordered table-striped table-hover">
                            <thead class="table-primary">
                              <tr>
                                <th scope="col">Venturi Connector (Color)</th>
                                <th scope="col">Flow Rate Required (L/min)</th>
                                <th scope="col">FiO<sub>2</sub> Delivered</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Blue</td>
                                <td>2-4</td>
                                <td>24%</td>
                              </tr>
                              <tr>
                                <td>Yellow</td>
                                <td>4-6</td>
                                <td>28%</td>
                              </tr>
                              <tr>
                                <td>White</td>
                                <td>8-10</td>
                                <td>31%</td>
                              </tr>
                              <tr>
                                <td>Green</td>
                                <td>10-12</td>
                                <td>35%</td>
                              </tr>
                              <tr>
                                <td>Pink</td>
                                <td>12-15</td>
                                <td>40%</td>
                              </tr>
                              <tr>
                                <td>Orange</td>
                                <td>-</td>
                                <td>50%</td>
                              </tr>
                              <tr>
                                <td>Red</td>
                                <td>-</td>
                                <td>60%</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>`
        },

        { id: 4,
          name: 'Nasal Cannulas',
          imageUrl: 'assets/images/productA2.jpg',
          description: `<div class="container">
                          <p>A nasal cannula is a medical device used to provide supplemental oxygen therapy to people who have lower oxygen levels. There are two types of nasal cannulas: low flow and high flow. The device has two prongs that sit below the nose, delivering oxygen directly into the nostrils.</p>

                          <ul>
                            <li><strong>Purpose:</strong> The nasal cannula is used to deliver supplemental oxygen or increased airflow to a patient in need of respiratory help. The device consists of a lightweight tube that splits into two prongs, which are placed in the nostrils, allowing a mixture of air and oxygen to flow into the patient’s airways.</li>
                            <li><strong>Usage:</strong> It is generally used for providing small amounts of supplemental oxygen, without rigid control of respiration, such as in oxygen therapy.</li>
                            <li><strong>Flow rate:</strong> Most nasal cannulas can only provide oxygen at low flow rates (up to 5 liters per minute), delivering an oxygen concentration of 28–44%.</li>
                          </ul>
                        </div>`
        },

        { id: 5,
          name: 'Non-Rebreathing Masks',
          imageUrl: 'assets/images/productA2.jpg',
          description: `<div class="container">
                          <p>A non-rebreather mask is a medical device that helps deliver oxygen in emergency situations. It consists of a face mask connected to a reservoir bag that’s filled with a high concentration of oxygen. The reservoir bag is connected to an oxygen tank.</p>
                          
                          <ul>
                            <li><strong>Mask function:</strong> The mask covers both nose and mouth. One-way valves prevent exhaled air from re-entering the oxygen reservoir.</li>
                            <li><strong>Emergency use:</strong> A non-rebreather mask is used in emergency situations to prevent hypoxemia (low blood oxygen). Conditions that disrupt the lungs' ability to uptake oxygen or the heart’s ability to pump blood can cause low blood oxygen levels.</li>
                          </ul>
                          
                          <h4>Key Features:</h4>
                          <ul>
                            <li>Provide high O2 concentration.</li>
                            <li>Lead strap and adjustable nose clip.</li>
                          </ul>
                        </div>`
        },

        { id: 6,
          name: 'Anesthesia Breathing Circuits',
          imageUrl: 'assets/images/productA2.jpg',
          description: `<div class="container">
                          <h3>Breathing Circuit</h3>
                          <p>A breathing circuit is used to deliver oxygen, remove carbon dioxide, and deliver inhalational anesthetic agents to a patient. It consists of one or two pieces of plastic tubing and a bag that connect a fresh gas flow (wall oxygen or ventilator) to the patient’s airway, such as a face mask, laryngeal mask airway (LMA), or endotracheal tube (ETT).</p>
                          
                          <ul>
                            <li><strong>Breathing circuit usage:</strong> Used to deliver oxygen and anesthetic gases, and eliminate carbon dioxide. Also, to provide a pathway for the flow of gas between the mechanical ventilator and the patient’s airway.</li>
                            <li><strong>Proper functioning:</strong> The proper functioning of a breathing circuit is essential to ensure safe and effective delivery of oxygen and other gases to the patient.</li>
                          </ul>
                        </div>`
        },

        { id: 7,
          name: 'Breathing Circuit Accessories',
          imageUrl: 'assets/images/productA2.jpg',
          description: `<div class="container">
                          <!-- Breathing Bags Section -->
                          <ul>
                            <li>Breathing Bags</li>
                            <li>Bacterial Filter</li>
                            <li>B.V. (Bacterial Viral Filters)</li>
                          </ul>

                          <!-- Benefits Section -->
                          <h3>Benefits:</h3>
                          <p>
                            There are several benefits of using bacterial/viral filters in accessories of respiratory devices,
                            including:
                          </p>
                          <ol>
                            <li>Reduces the risk of healthcare-associated infections</li>
                            <li>Improves patient safety</li>
                            <li>Enhances infection control measures</li>
                            <li>Easy to use and dispose of</li>
                            <li>Cost-effective</li>
                          </ol>

                          <!-- HME Foam Filter Section -->
                          <h3>HME Foam Filter</h3>
                          <ul>
                            <li>An HME (Heat and Moisture Exchange) foam filter is a medical device used in respiratory therapy to help humidify and warm the air that a patient breathes in.</li>
                            <li>These filters typically consist of a foam material with a large surface area and are designed to trap moisture from the patient’s exhaled breath and release it into the air they breathe in.</li>
                            <li>The moisture helps to prevent dryness and irritation of the airways and improves the patient’s comfort during mechanical ventilation or other respiratory therapy.</li>
                          </ul>
                          <h4>Benefit:</h4>
                          <p>
                            Improved patient comfort: HME foam filters help to humidify and warm the air that the
                            patient breathes in, which can improve their comfort during respiratory therapy.
                          </p>

                          <!-- Catheter Mounts Section -->
                          <h3>Catheter Mounts</h3>
                          <p>
                            Catheter mounts are medical devices used to secure and stabilize Catheters in place during
                            medical procedures or for long-term use. They are typically used in situations where a
                            Catheter needs to be secured in a particular position or where movement of the Catheter
                            needs to be minimized. Catheter mounts are used in a variety of medical applications,
                            including:
                          </p>
                          <ul>
                            <li>
                              <strong>Respiratory therapy:</strong> Catheter mounts can be used to secure respiratory Catheters in place
                              during procedures such as bronchoscopy or tracheostomy.
                            </li>
                          </ul>

                          <!-- Anesthesia Mask Section -->
                          <h3>Anesthesia Mask</h3>
                          <ul>
                            <li>An anesthesia mask, also known as an anesthesia face mask or a breathing mask, is a medical device used to deliver anesthesia or oxygen to a patient during surgical procedures, diagnostic tests, or other medical interventions.</li>
                            <li>The mask is typically made of clear, medical-grade plastic and is designed to fit over the nose and mouth of the patient.</li>
                            <li>
                              Anesthesia masks are commonly used in situations where the patient is unable to
                              breathe on their own due to the effects of anesthesia or sedation. They can also be used
                              to deliver oxygen to patients with respiratory distress or other breathing problems.
                            </li>
                          </ul>

                          <!-- Gas Sampling Line Section -->
                          <h3>Gas Sampling Line</h3>
                          <p>
                            Gas sampling lines have several benefits in medical settings. Some of the key benefits include:
                          </p>
                          <ol>
                            <li>
                              <strong>Accurate monitoring:</strong> Gas sampling lines allow for the accurate monitoring of a
                              patient’s respiratory function. This can help healthcare professionals to make more
                              informed treatment decisions and adjust ventilation settings as needed.
                            </li>
                            <li>
                              <strong>Non-invasive:</strong> Gas sampling lines are non-invasive, meaning they do not require any
                              punctures or invasive procedures to collect gas samples. This can help to minimize
                              discomfort and reduce the risk of complications associated with invasive procedures.
                            </li>
                            <li>
                              <strong>Easy to use:</strong> Gas sampling lines are relatively easy to use and can be quickly attached
                              to respiratory devices such as endotracheal tubes or mechanical ventilators.
                            </li>
                            <li>
                              <strong>Versatile:</strong> Gas sampling lines are available in different lengths and diameters to fit a
                              range of respiratory devices and patient needs. They can also be used with various types
                              of gas analyzers or monitoring devices.
                            </li>
                            <li>
                              <strong>Cost-effective:</strong> Gas sampling lines are generally inexpensive and disposable, which
                              minimize the risk of infection transmission.
                            </li>
                          </ol>
                        </div>`
        },

        { id: 8,
          name: 'Airway Management',
          imageUrl: 'assets/images/productA2.jpg',
          description: `<div class="container">
                          <!-- Endotracheal Tube Section -->
                          <h3>Endotracheal Tube</h3>
                          <p>
                            An endotracheal tube (ET tube) is a medical device used to provide an airway for patients who are unable to breathe adequately on their own. 
                            It is commonly used in emergency and critical care settings, as well as during surgical procedures.
                          </p>
                          <p>
                            The endotracheal tube is a flexible tube made of plastic or rubber that is inserted through the mouth or nose and into the trachea (windpipe) of the patient. 
                            The tube is connected to a ventilator or other respiratory device that provides oxygen and other gases to the patient’s lungs.
                          </p>
                          <p>
                            Endotracheal tubes come in different sizes to fit a range of patient ages and sizes, from infants to adults. 
                            The tube is typically secured in place with tape or a specialized device called an endotracheal tube holder.
                          </p>
                          <h4>Uses of Endotracheal Tubes:</h4>
                          <ol>
                            <li>
                              <strong>Respiratory failure:</strong> Endotracheal tubes can support patients with respiratory failure, where the lungs cannot adequately oxygenate the blood or remove carbon dioxide.
                            </li>
                            <li>
                              <strong>Airway obstruction:</strong> Endotracheal tubes can relieve airway obstruction in conditions like severe asthma or chronic obstructive pulmonary disease (COPD).
                            </li>
                          </ol>

                          <!-- Tracheostomy Tube Section -->
                          <h3>Tracheostomy Tube</h3>
                          <p>
                            A tracheostomy tube is a medical device used to provide an airway for patients who require long-term mechanical ventilation or who are unable to breathe adequately on their own due to various medical conditions. 
                            The tube is inserted into a surgically created opening in the patient’s neck called a tracheostomy, allowing air to flow directly into the trachea (windpipe).
                          </p>
                          <p>
                            Tracheostomy tubes come in different sizes and shapes to fit a range of patient needs. 
                            They are typically made of silicone or other medical-grade materials and can be either disposable or reusable.
                          </p>
                          <h4>Uses of Tracheostomy Tubes:</h4>
                          <ol>
                            <li>
                              <strong>Respiratory failure:</strong> Tracheostomy tubes support patients with chronic respiratory failure due to conditions like COPD or neuromuscular diseases.
                            </li>
                            <li>
                              <strong>Long-term ventilation:</strong> They provide long-term mechanical ventilation to patients requiring prolonged respiratory support.
                            </li>
                            <li>
                              <strong>Airway obstruction:</strong> Tracheostomy tubes can relieve airway obstruction in conditions such as cancer, trauma, or infections.
                            </li>
                            <li>
                              <strong>Removal of secretions:</strong> They help remove secretions from the airway in patients unable to cough effectively due to neuromuscular or other conditions.
                            </li>
                          </ol>
                        </div>`
        },

        { id: 9,
          name: 'Airways',
          imageUrl: 'assets/images/productA2.jpg',
          description: `<div class="container">
                          <h3>Oropharyngeal Airways</h3>
                          <p>
                            An oropharyngeal airway (OPA) is a medical device used to maintain an open airway in unconscious or sedated patients. 
                            It is a short, curved, J-shaped tube made of plastic or rubber that is inserted into the patient’s mouth and throat to prevent the tongue from blocking the airway.
                          </p>
                          <p>
                            OPAs come in different sizes to fit a range of patient ages and sizes, from infants to adults. They are typically used when a patient is under general anesthesia, undergoing sedation, or is unconscious due to a medical condition.
                          </p>

                          <h3>Laryngeal Masks</h3>
                          <p>
                            A Laryngeal mask airway (LMA) is a medical device used to maintain an open airway in patients who are unable to breathe adequately on their own. 
                            It is a tube-shaped device made of soft, flexible materials that is inserted through the mouth and into the pharynx, where it sits above the larynx and provides a seal around the entrance to the trachea.
                          </p>
                          <p>
                            The LMA is designed to fit over the larynx and provide a secure airway seal, allowing air to flow freely in and out of the lungs. It is typically used in emergency and critical care settings, as well as during surgical procedures.
                          </p>
                          <p>
                            The LMA comes in different sizes to fit a range of patient ages and sizes, from infants to adults. It is inserted through the mouth and advanced into the pharynx, where it is secured in place with a cuff that inflates to provide a tight seal around the entrance to the trachea.
                          </p>

                          <h3>Manual Resuscitator</h3>
                          <p>
                            A manual resuscitator, also known as a bag-valve-mask (BVM), is a handheld device used to assist with artificial ventilation in emergency medical situations. 
                            The main function of a manual resuscitator is to provide oxygen to a patient who is not breathing adequately or is not breathing at all.
                          </p>
                          <p>
                            The device consists of a bag made of a soft, pliable material (such as silicone or rubber) that is connected to a face mask and an oxygen supply. 
                            The mask is placed over the patient’s nose and mouth and the bag is squeezed by the medical provider, which forces air into the patient’s lungs. 
                            The bag then refills with air when the medical provider releases it, allowing for the patient to exhale.
                          </p>

                          <h3>Suction Catheter</h3>
                          <p>
                            A suction catheter is used to remove secretions, fluids, or debris from the airways or other body cavities. 
                            It is commonly used in respiratory care to clear the airway of patients who have difficulty coughing or clearing their secretions effectively.
                          </p>
                          <p>
                            The suction catheter consists of a flexible tube with a rounded tip and multiple side holes near the distal end. 
                            The proximal end of the catheter is connected to a suction source, such as a suction machine or wall suction. 
                            In surgical settings, suction catheters can also play a crucial role in maintaining a clear surgical field and removing fluids from the surgical site.
                          </p>
                          <p>
                            A suction catheter is a medical device used to remove secretions, fluids, or foreign objects from a patient’s airway or respiratory system. 
                            It is a long, flexible tube that is inserted through the patient’s nose or mouth and down into their airway or trachea.
                          </p>
                          <p>
                            Suction catheters are typically made of flexible plastic or rubber and are available in various sizes, depending on the patient’s age and the intended use. 
                            The larger the diameter of the catheter, the more suction it can deliver.
                          </p>

                          <h4>Some of the Common Uses of Suction Catheters Include:</h4>
                          <ol type="1">
                            <li>Respiratory Distress: Suction catheters are used to clear the airway of patients experiencing respiratory distress due to conditions such as asthma, bronchitis, or pneumonia.</li>
                            <li>Postoperative Care: After surgery, patients may have difficulty coughing or clearing their own secretions. Suction catheters can be used to remove any fluids or secretions that may be obstructing the patient’s airway.</li>
                            <li>Intensive Care: Patients in intensive care may be intubated, or have a breathing tube inserted, to assist with breathing. Suction catheters can be used to clear secretions from the breathing tube and prevent obstruction.</li>
                            <li>Cardiopulmonary Resuscitation (CPR): During CPR, patients may vomit or regurgitate, which can obstruct the airway. Suction catheters can be used to remove any fluid or debris from the airway during CPR.</li>
                            <li>Emergency Airway Management: In emergency situations, such as choking or near-drowning, suction catheters can be used to quickly clear the airway and prevent further complications.</li>
                          </ol>

                          <h4>Benefits of Suction Catheter:</h4>
                          <ul>
                            <li>Clearing airway obstruction</li>
                            <li>Preventing aspiration</li>
                            <li>Improved patient comfort</li>
                            <li>Enhanced patient safety</li>
                          </ul>

                          <h3>Closed Suction Catheter</h3>
                          <p>Details about Closed Suction Catheter would go here.</p>

                          <h3>Mucus Extractor</h3>
                          <p>
                            A mucus extractor is a device used for aspiration of mucus congesting the upper airways of the newborn or for <strong>suctioning tracheal/bronchial secretions</strong> (of newborns, children, and adults).
                          </p>
                          <p>
                            In adult patients, the mucus extractor is often employed in clinical settings where respiratory secretions need to be obtained for diagnostic or therapeutic purposes. 
                            For instance, individuals with conditions such as chronic obstructive pulmonary disease (COPD) or cystic fibrosis often produce an excessive amount of thick mucus that impedes effective breathing. 
                            A mucus extractor assists in the clearance of these secretions and facilitates the collection of samples for laboratory analysis.
                          </p>
                        </div>`
        },

        { id: 10,
          name: 'UROLOGY',
          imageUrl: 'assets/images/productA2.jpg',
          description: `<div class="container">
                          <h3>Drainage Catheter</h3>
                          <p>A drainage catheter is a medical device used to remove fluids, such as urine or other bodily fluids, from the body.</p>

                          <h3>Indwelling Foley Catheter</h3>
                          <p>A Foley catheter is a common type of indwelling catheter. It has a soft, plastic or rubber tube that is inserted into the bladder to drain the urine.</p>
                          <p>It is available in silicone and latex material, and it is available for pediatric, female, and standard sizes.</p>

                          <h4>Types:</h4>
                          <ul>
                            <li>Latex Foley Catheter - Standard</li>
                            <li>100% Silicone Foley Catheter - Standard</li>
                          </ul>
                        </div>`
        },

        { id: 11,
          name: 'Spinal Needle',
          imageUrl: 'assets/images/productA2.jpg',
          description: `<div class="container">
                          <p>A spinal needle is used for procedures involving the spinal canal, such as spinal anaesthesia or lumbar punctures. It is a long, thin needle with a sharp tip and a hollow center.</p>
                          <p>During a spinal procedure, the spinal needle is inserted through the skin and tissues of the back into the spinal canal. This allows access to the cerebrospinal fluid (CSF) surrounding the spinal cord and brain.</p>

                          <h4>Types of Spinal Needles:</h4>
                          <ul>
                            <li>Quincke Needle</li>
                            <li>Pencil Point Needle</li>
                          </ul>
                        </div>`
        },

        { id: 12,
          name: 'Closed Wound Drainage System',
          imageUrl: 'assets/images/productA2.jpg',
          description: `<div class="container">
                          <p>It is used to remove excess fluid or blood from a surgical wound or body cavity. It consists of a drain, tubing, and a collection container. The drain is placed inside the wound or cavity, and the tubing is connected to the drain and leads to the collection container.</p>
                          <p>The closed system is designed to create negative pressure, allowing the fluid to be suctioned out and collected in the container. This helps to prevent the accumulation of fluid, which can lead to complications such as infection or delayed healing.</p>
                        </div>`
        },

        { id: 13,
          name: 'Chest Bottles',
          imageUrl: 'assets/images/productA2.jpg',
          description: `<div class="container">
                          <p>Chest bottles, also known as chest drainage systems or chest tubes, are used to remove air, fluid, or blood from the chest cavity. They are commonly used in thoracic surgery, trauma cases, or in the management of certain respiratory conditions.</p>
                          <p>The chest bottle system works by creating a pressure gradient that allows air or fluid to be drained from the chest cavity. The drainage tube is connected to the collection chamber, which creates a negative pressure environment. This negative pressure helps to remove air or fluid from the chest cavity, promoting lung re-expansion and preventing complications.</p>
                        </div>`
        },

        { id: 14,
          name: 'Nasogastric Tubes',
          imageUrl: 'assets/images/productA2.jpg',
          description: `<div class="container">
                          <p>A nasogastric tube (NG tube) is used to deliver liquid nutrition, medication, or to remove fluids and gases from the stomach. It is a flexible tube inserted through the nose and down into the stomach.</p>
                          <p>Here are some key points about nasogastric tubes:</p>
                          <ul>
                            <li><strong>Feeding:</strong> NG tubes can be used to deliver liquid nutrition directly into the stomach for patients who cannot eat or swallow normally.</li>
                            <li><strong>Medication administration:</strong> NG tubes are used to administer medications that need to be given directly into the stomach.</li>
                            <li><strong>Gastric decompression:</strong> NG tubes can be used to remove excess fluids, gases, or stomach contents to relieve gastrointestinal distention or prevent vomiting.</li>
                          </ul>
                        </div>`
        },

        
      ]
    },
    {
      id: 2,
      name: 'Health products',
      products: [
        { id: 3, name: '', imageUrl: 'assets/images/productB1.jpg', description: 'Description for product B1' },
        { id: 4, name: 'Product B2', imageUrl: 'assets/images/productB2.jpg', description: 'Description for product B2' },
      ]
    },
    {
      id: 3,
      name: 'Section C',
      products: [
        { id: 5, name: 'Product C1', imageUrl: 'assets/images/productC1.jpg', description: 'Description for product C1' },
        { id: 6, name: 'Product C2', imageUrl: 'assets/images/productC2.jpg', description: 'Description for product C2' },
      ]
    }
  ];

  constructor() { }

  // Return an observable with the list of all products
  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

   // Return an observable with the list of sections
   getSections(): Observable<Section[]> {
    return of(this.sections);
  }

  // Optionally, return an observable with a single section by ID
  getSectionById(id: number): Observable<Section | undefined> {
    const section = this.sections.find(s => s.id === id);
    return of(section);
  }

  // Return an observable with the products in a specific section by section ID
  getProductsInSection(sectionId: number): Observable<Product[]> {
    const section = this.sections.find(s => s.id === sectionId);
    return section ? of(section.products) : of([]);
  }

  // Return an observable with a single product by product ID from all sections
  getProductById(productId: number): Observable<Product | undefined> {
    const product = this.sections
      .flatMap(section => section.products) // Flatten all products from all sections
      .find(p => p.id === productId); // Find the product by ID
    return of(product);
  }
}
