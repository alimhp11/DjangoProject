from home.models import Category,Ad,New
def category_list(request):
	categories = Category.objects.all()
	AD=Ad.objects.all()
	top_views=New.objects.all().order_by('-view')[:50]
	return {'categories': categories, 'AD': AD, 'top_views': top_views}