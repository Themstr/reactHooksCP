import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Description from './Components/Description/Description'
import Home from './Home'


function App() {
  const [movies, setMovies] = useState([
    { title: 'Dachra', description: 'Yasmine, étudiante en journalisme, et ses deux amis Walid et Bilel qui cherchent à élucider le mystère dun vieux crime, commis il y a plus de 25 ans. Au milieu de nulle part, une femme avait été trouvée mutilée et presque morte. Une fois leur investigation terminée, ils vont se trouver dans une forêt où ils allaient découvrir un petit village isolé appelé “Dachra”. Coincé dans ce territoire inconnu, le trio va essayer de fuir lhorreur. Auront-ils réussi à séchapper ?', posterURL: 'https://pictures.artify.tn/media/r9p6ux7liv6q4pxabgwi.jpg?width=200', rating: 5, id: 1 },
    { title: 'Rebelote', description: 'Cest lhistoire de trois tunisiens que rien ne les relie dans la vie quotidienne à part le fait quils sont accros à la drague via Facebook. Un jour ils tombent dans le piège dune femme qui leur donne rendez-vous dans un endroit retiré et les braque avec laide dun gang. Et cest là quun phénomène surnaturel se produit et nos trois personnages se retrouvent sans le savoir projetés dans le passé…', posterURL: 'https://pictures.artify.tn/media/ezxhsrwyexyglmoitxlh.jpg?width=200', rating: 3, id: 2 },
    { title: 'Noce dété', description: 'Hamid est journaliste, la trentaine passée et il vit son célibat avec sa famille petite bourgeoise comme un échappatoire pour ne pas ressembler aux siens. Sa famille veut le marier à tout prix avec sa voisine Rym (30 ans) pour mettre fin à ses hésitations, et aux mauvaises langues qui népargnent pas les célibataires endurcis. Nosant sopposer à la décision de mariage de sa famille, Hamid préfère fuir latmosphère des préparatifs…', posterURL: 'https://pictures.artify.tn/media/zhkfzolegpiij9rzf3ui.jpg?width=200', rating: 5, id: 3 },
    { title: 'A Peine Jouvre Les Yeux', description: 'Tunis, été 2010, quelques mois avant la Révolution, Farah 18 ans passe son bac et sa famille limagine déjà médecin… mais elle ne voit pas les choses de la même manière. Elle chante au sein d¹un groupe de rock engagé. Elle vibre, senivre, découvre lamour et sa ville de nuit contre la volonté dHayet, sa mère, qui connaît la Tunisie et ses interdits.', posterURL: 'https://pictures.artify.tn/media/r07wsehw43shedjuick2.jpg?width=200', rating: 2, id: 4 },
  ])
  return(
    <Routes>
      <Route path="/" element={<Home movies={movies} setMovies={setMovies} />} />
      <Route path="/:id" element={<Description movies={movies}/>} />
    </Routes>
  )
}

export default App
