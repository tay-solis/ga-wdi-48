from django.shortcuts import render
from .models import Contact

# Create your views here.
def contacts_list(request):
    contacts = Contact.objects.all()
    return render(request, 'contacts/contacts_list.html', {'contacts': contacts})

def contacts_show(request, pk):
    contact = Contact.objects.get(id=pk)
    return render(request, 'contacts/contacts_show.html', {'contact': contact})
