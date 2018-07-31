---
title: "Just in: small batch of Jamaica Blue Mountain in store next week"
date: 2017-01-04T15:04:10.000Z
description: We’re proud to announce that we’ll be offering a small batch of Jamaica Blue Mountain coffee beans in our store next week.
---

We expect the shipment of a limited quantity of green beans next Monday. We’ll be offering the roasted beans from Tuesday, but quantities are limited, so be quick.

Blue Mountain Peak is the highest mountain in Jamaica and one of the highest peaks in the Caribbean at 7,402 ft. It is the home of Blue Mountain coffee and their famous tours. It is located on the border of the Portland and Saint Thomas parishes of Jamaica.

## A little history

The Blue Mountains are considered by many to be a hiker's and camper's paradise. The traditional Blue Mountain trek is a 7-mile hike to the peak and consists of a 3,000-foot increase in elevation. Jamaicans prefer to reach the peak at sunrise, thus the 3–4 hour hike is usually undertaken in darkness. Since the sky is usually very clear in the mornings, Cuba can be seen in the distance.

>Some of the plants found on the Blue Mountain cannot be found anywhere else in the world and they are often of a dwarfed sort.

This is mainly due to the cold climate which inhibits growth. The small coffee farming communities of Claverty Cottage and Hagley Gap are located near the peak.

## What you need to know before trying

Jamaican Blue Mountain Coffee or Jamaica Blue Mountain Coffee is a classification of coffee grown in the Blue Mountains of Jamaica. The best lots of Blue Mountain coffee are noted for their mild flavor and lack of bitterness. Over the past few decades, this coffee has developed a reputation that has made it one of the most expensive and sought-after coffees in the world. Over 80% of all Jamaican Blue Mountain Coffee is exported to Japan. In addition to its use for brewed coffee, the beans are the flavor base of Tia Maria coffee liqueur.

Jamaican Blue Mountain Coffee is a globally protected certification mark, meaning only coffee certified by the Coffee Industry Board of Jamaica can be labeled as such. It comes from a recognized growing region in the Blue Mountain region of Jamaica, and its cultivation is monitored by the Coffee Industry Board of Jamaica.

The Blue Mountains are generally located between Kingston to the south and Port Antonio to the north. Rising 7,402 ft, they are some of the highest mountains in the Caribbean. The climate of the region is cool and misty with high rainfall. The soil is rich, with excellent drainage. This combination of climate and soil is considered ideal for coffee.



```python
import matplotlib.pyplot as plt
from matplotlib import rc
import numpy as np
from ipywidgets.widgets import interact, Layout

rc('font', **{'family': 'serif', 'serif': ['Computer Modern'], 'size': 16})
rc('text', usetex=True)
```


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


```python
interact(plt_psi, L=(1, Lmax, 0.1))
```
