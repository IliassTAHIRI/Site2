---
title: "Python"
date: 2016-12-17T15:04:10.000Z
description: The language of the future
image: /img/blog/flavor_wheel.jpg
---

Python is a very powerful and simple language. The power of python comes from his simplicity and elegence.

## What di you need to know about it

Many libraries are useful including:

- numpy
- matplotlib
- scipy

## Example code




<div class="input_area" markdown="1">

```python
import matplotlib.pyplot as plt
from matplotlib import rc
import numpy as np
from ipywidgets.widgets import interact, Layout

rc('font', **{'family': 'serif', 'serif': ['Computer Modern'], 'size': 16})
rc('text', usetex=True)
```

</div>


<div class="input_area" markdown="1">

```python
Emax = 5
xmin = -2
Lmax = 5
def psi(n, x, L):
  return np.sqrt(2/L) * np.sin(n * np.pi * x / L)
def plt_psi(L):
  x = np.linspace(0,L,100)
  nmax = int(np.sqrt(Emax)*L)
  for n in range(1,nmax+1):
      plt.plot(x, psi(n,x,L)+(n/L)**2, c='r', lw=2, alpha=0.7)
      plt.axhline((n/L)**2, 0, L, c='k')
  plt.ylim(0,6)
  plt.xlim(xmin,Lmax+1)
  plt.axvspan(L, Lmax+1, fc='gray')
  plt.axvspan(-Lmax, 0, fc='gray')
  plt.xlabel(r'$x$')
  plt.ylabel(r'$E \;/(h^2/8m)$')
  plt.show()
```

</div>


<div class="input_area" markdown="1">

```python
interact(plt_psi, L=(1, Lmax, 0.1))
```

</div>


![png](a_files/a_2_0.png)
