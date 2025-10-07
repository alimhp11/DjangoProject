from django.views.generic import ListView, DetailView

from home.models import New, Ad, Category


class NewList(ListView):
	model = New
	context_object_name = 'news'
	template_name = 'home/home.html'
	paginate_by = 10
	ordering = ['-date']

	def get_context_data(self, **kwargs):
		context = super().get_context_data(**kwargs)
		context['AD'] = Ad.objects.all()

		return context


class NewDetail(DetailView):
	model = New
	template_name = 'home/news_detail.html'
	context_object_name = 'news'
	slug_field = 'slug'
	slug_url_kwarg = 'slug'

	def get_context_data(self, **kwargs):
		views = self.request.session.get('views', [])
		print(views)
		if self.object.id not in views:
			self.object.view += 1
			self.object.save()
			views.append(self.object.id)
		self.request.session['views'] = views


class CategoryList(DetailView):
	model = Category
	context_object_name = 'cat_list'
	template_name = 'home/category_detail.html'

	def get_context_data(self, **kwargs):
		context = super().get_context_data(**kwargs)
		context['clist'] = self.object.c_detail.all()
		return context
