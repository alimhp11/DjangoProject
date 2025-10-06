from django.contrib.auth.models import User
from django.db import models
from django.utils.text import slugify
from django_jalali.db import models as jmodels


class Category(models.Model):
	title = models.CharField(max_length = 100)

	def __str__(self):
		return self.title


class New(models.Model):
	title = models.CharField(max_length = 100)
	category = models.ForeignKey(Category, on_delete = models.CASCADE, related_name = 'c_detail')
	summary_description = models.TextField(max_length = 50,null = True, blank = True)
	description = models.TextField()
	image = models.ImageField(upload_to = 'news/', null = True, blank = True)
	slug = models.SlugField(max_length = 100, unique = True, blank = True, null = True)
	view = models.IntegerField(default = 0)
	created = models.DateTimeField(auto_now_add = True,null = True,blank = True)
	date = jmodels.jDateTimeField(auto_now_add = True, null = True, blank = True)
	updated = jmodels.jDateTimeField(auto_now = True, null = True, blank = True)

	def jalali_date(self):
		return self.date.strftime('%Y/%m/%d')

	def __str__(self):
		return self.title

	def save(self, *args, **kwargs):
		self.slug = slugify(self.title, allow_unicode = True)
		super().save(*args, **kwargs)


class Ad(models.Model):
	image = models.ImageField(upload_to = 'ads/', null = True, blank = True)
	address = models.CharField(max_length = 100)

	def __str__(self):
		return self.address


class Urgent(models.Model):
	title = models.CharField(max_length = 100)
	image = models.ImageField(upload_to = 'urgents/', null = True, blank = True)
	status = models.BooleanField(default = False)

	def __str__(self):
		return self.title
