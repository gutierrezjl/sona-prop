import Post from '../models/posts.js'

//Obtener todos

export const getPosts = async (req, res) => {

    try {
        //throw new Error('Error nuevo para probar')  Generar un error para probar el try catch 
        const posts =await Post.find ()
        res.send(posts)

        }

        catch(error)
        {
            return res.status(500).json({message: error.message})
        }

}
//Crear

export const createPost = async (req, res) =>
{ 
    try{
        const {titulo, description} = (req.body)

        const newPost = new Post ({titulo, description})

        await newPost.save()
        
        return res.json(newPost)
    }
    catch(error)
    {
        return res.status(500).json({message: error.message})
    }
}


//Actualizar

export const updatePost = async (req, res) => 
{
    try{

        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body,{new: true})

        return  res.send(updatedPost)

    }

    catch(error)
    {
        return res.status(500).json({message: error.message})
    }
}

//Borrar

export const deletePost = async (req, res) => 
{
    try
    {
    const postRemoved = await Post.findByIdAndDelete(req.params.id)

    if (!postRemoved) return res.sendStatus(404)

    return res.sendStatus(204)

    }

    catch(error)
    {
        return res.status(500).json({message: error.message})
    }
    
}

//Obtener diferenciado

export const getPost = async (req, res) => 
{

 try
 {
    const post = await Post.findById(req.params.id)
    if(!post) return res.sendStatus(404)
    return res.json(post)
 }

 catch(error)
    {
        return res.status(500).json({message: error.message})
    }

}