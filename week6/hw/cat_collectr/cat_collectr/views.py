from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .models import Cat
from .forms import CatForm

# Create your views here.
def cats(request):
    cats = Cat.objects.all()
    return render(request, 'cats/cats.html', {'cats': cats})

@login_required
def my_cats(request):
    cats = Cat.objects.filter(cat_parent_id = request.user.id)
    return render(request, 'cats/cats.html', {'cats':cats})

@login_required
def add_cat(request):
    if request.method == 'POST':
        form = CatForm(request.POST)
        if form.is_valid():
            cat = form.save()
            return render(request, 'cats/add_cat.html', {'message': 'Added'})
    else:
        form = CatForm()
        return render(request, 'cats/add_cat.html', {'form': form})
