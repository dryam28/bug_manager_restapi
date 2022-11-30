import Bug_Model from "../models/Bug.js"
import Project_Model from "../models/Project.js"
import User_Model from "../models/User.js"

const getBug = async (req, res) => {
    const { project_id, user_id, start_date, end_date } = req.query
    if (!project_id && !user_id && !start_date && !end_date) return res.status(400).json({ msg: 'You have to specify at least one param' })

    try {
        const bugs = await User_Model.findAll({ raw: true })
        const findproject = await Project_Model.findOne({ raw: true, where: { id_project: project } })

        if (!finduser || !findproject) return res.status(404).json({ msg: 'The given user or project does not exist' })

        await bug.save()
        return res.status(200).json({ msg: 'Bug assigned!' })
    } catch (error) {
        return res.status(500).json({ msg: error.message })

    }
}

const addBug = async (req, res) => {
    const { user, project, description } = req.body
    const bug = new Bug_Model({
        description,
        userIdUser: user,
        projectIdProject: project,
        creationDate: Date.now()
    })
    try {
        const finduser = await User_Model.findOne({ raw: true, where: { id_user: user } })
        const findproject = await Project_Model.findOne({ raw: true, where: { id_project: project } })

        if (!finduser || !findproject) return res.status(404).json({ msg: 'The given user or project does not exist' })

        await bug.save()
        return res.status(200).json({ msg: 'Bug assigned!' })
    } catch (error) {
        return res.status(500).json({ msg: error.message })

    }
}

export {
    addBug,
    getBug
}