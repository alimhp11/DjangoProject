from django.db.models import Count
from django.views.generic import ListView, DetailView

from home.models import New, Ad,Category


class NewList(ListView):
	model = New
	context_object_name = 'news'
	template_name = 'home/home.html'
	paginate_by = 10

	def get_context_data(self, **kwargs):
		context = super().get_context_data(**kwargs)
		context['order_view'] = New.objects.annotate(view_count = Count('view')).order_by('-view_count')[:10]
		context['AD'] = Ad.objects.all()
		return context


class NewDetail(DetailView):
	model = New
	template_name = 'home/news_detail.html'
	context_object_name = 'news'
	slug_field = 'slug'
	slug_url_kwarg = 'slug'

	def get_context_data(self, **kwargs):
		context = super().get_context_data(**kwargs)

		if self.request.user.is_authenticated:
			# اگه کاربر توی لیست بازدیدها نبود، اضافه‌ش کن
			if not self.object.view.filter(id = self.request.user.id).exists():
				self.object.view.add(self.request.user)

		# اینجا تعداد بازدیدها رو میذاریم داخل کانتکست
		context['views'] = self.object.view.count()

		return context
class CategoryList(DetailView):
	model = Category
	context_object_name = 'cat_list'
	template_name = 'home/category_detail.html'
	def get_context_data(self, **kwargs):
		context=super().get_context_data(**kwargs)
		context['clist'] = self.object.c_detail.all()
		return context
