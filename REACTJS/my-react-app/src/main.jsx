import { createRoot } from 'react-dom/client'


const myelement = (
<table>
  <tr>
    <th>Name</th>
  </tr>
  <tr><td>Jhon</td></tr>
  <tr><td>Elsa</td></tr>
</table>
);
const james=(
<h1>This is Header tag</h1>
)
createRoot(document.getElementById('sandy')).render(
james
)
createRoot(document.getElementById('root')).render(
myelement

)
