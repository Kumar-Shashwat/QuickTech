// Get dropdown elements
const dropdown1 = document.getElementById('dropdown1');
const dropdown2 = document.getElementById('dropdown2');
const dropdown3 = document.getElementById('dropdown3');


// Define the options for dropdown2 based on the selection in dropdown1
dropdown1.addEventListener('change', function () {
  const selectedValue = dropdown1.value;

  // Enable the second dropdown
  dropdown2.disabled = false;
  dropdown3.disabled = false;
  

  // Reset the second dropdown
  dropdown2.selectedIndex = 0;

  // Clear existing options in dropdown2
//   dropdown2.innerHTML = '';

  // Add options to dropdown2 based on the selected value in dropdown1
  if(selectedValue === 'option0'){
    dropdown2.innerHTML = `
        <option value = "" > select </option>
    `;
  }
  else if (selectedValue === 'option1') {
    dropdown2.innerHTML = `
      <option value="">Select</option>
      <option value="option1-1">seo</option>
      <option value="option1-2">Pay per click</option>
      <option value="option1-3">social media marketing</option>
      <option value="option1-4">content marketing</option>
      <option value="option1-5">content marketing</option>
    `;
  } else if (selectedValue === 'option2') {
    dropdown2.innerHTML = `
      <option value="">Select</option>
      <option value="">Horizontal SaaS</option>
      <option value="option2-1">Vertial SaaS</option>
    `;
  } else if (selectedValue === 'option3') {
    dropdown2.innerHTML = `
      
      <option value="">option</option>
      <option value="option3-1">Instagram</option>
      <option value="option3-2">WhatsApp</option>
      <option value="option3-3">Facebook</option>
      <option value="option3-4">Telegram</option>
    `;
  }
});
