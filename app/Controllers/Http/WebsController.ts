import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class WebsController {
  public async index({view}: HttpContextContract) {
			return view.render('pages/about', {
				content_about:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia eveniet ipsa at ut odit enim dolorum aspernatur, quod sit adipisci perferendis cum esse quam deleniti culpa debitis, tenetur ea explicabo dolore! Similique aspernatur cum, tempora laboriosam minus sequi reiciendis assumenda tempore ab neque exercitationem aliquam libero impedit unde laborum quia eum, quisquam voluptatem dolores placeat voluptas esse. Itaque iusto ea natus odio tempora explicabo quisquam obcaecati error beatae distinctio iure est, quidem optio eum libero dolore incidunt nemo vitae? Possimus aliquid commodi, aspernatur nihil magnam eos inventore earum dolor ratione doloribus delectus molestiae nobis, minus veniam, autem repellendus! Nobis tempora amet accusantium eius aliquid deserunt nemo debitis sed animi. Dolorem eligendi voluptates tempore nam a nemo corporis recusandae reiciendis incidunt fugiat cumque, totam explicabo provident eveniet dolorum nobis cupiditate dicta ducimus facilis beatae et quos quae veniam aperiam? Numquam consequuntur ex quaerat sunt eveniet magni mollitia eligendi? Dolor sequi cumque obcaecati enim quae voluptatem? Labore similique, assumenda corrupti facilis impedit aspernatur repellat accusamus molestias quo, recusandae ratione corporis, repudiandae suscipit ad architecto maiores? Doloribus dignissimos aspernatur, beatae iste impedit, blanditiis itaque obcaecati, sint minima repudiandae dolorem molestias voluptatem facere fuga perspiciatis deleniti in? Incidunt veritatis eveniet architecto voluptatum cum asperiores.'
			})
		}

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
