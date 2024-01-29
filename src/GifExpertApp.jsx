import { useState } from "react";
import { AddCategory, GifGrid} from "./components";


export const GifExpertApp = () => {


    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (cat) => {

        if (categories.includes(cat) ) return;
        setCategories([ cat, ...categories]);
    }
    
  return (
    <>
    {/* titulo */}
    
    
      <h1>GifExpertApp</h1>

      {/* input */}
      <AddCategory 
      onNewCategory={onAddCategory}
      // setCategories={setCategories} 
      />
      {/* listado gif */}
      
        
      {
          categories.map(category => (
                <GifGrid 
                  key={category} 
                  category={category}
                />
              )
          )
      }
      
        {/* gif item */}
    </>
  );
}
