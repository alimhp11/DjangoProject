from home.models import Category,Ad
def category_list(request):
	categories = Category.objects.all()
	AD=Ad.objects.all()
	return {'categories': categories, 'AD': AD}